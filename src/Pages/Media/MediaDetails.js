import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import axios from "axios";
import useAuthProvider from "../../hooks/useAuthProvider";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import PostComments from "./PostComments";

const MediaDetails = () => {
  const { user } = useAuthProvider();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [activities, setActivities] = useState();
  const [refresh, setRefresh] = useState(false);
  const { id } = useParams();

  // getting single post details
  const { refetch } = useQuery({
    queryKey: [refresh],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/post-details/${id}`);
      const data = await res.json();
      setPost(data);
      // console.log(data);
      return data;
    },
  });

  // getting all comments by post
  useEffect(() => {
    fetch(`http://localhost:5000/all-comments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        refetch();
        setComments(data);
      })
      .catch((e) => {
        console.error("getting activities error => ", e);
      });
  }, [refresh, id, refetch]);

  // getting like if have
  useEffect(() => {
    fetch(`http://localhost:5000/activities/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setActivities(data);
      })
      .catch((e) => {
        console.error("getting activities error => ", e);
      });
  }, [id, refresh]);

  const handleAddLike = (value) => {
    const newValue = value + 1;
    console.log(newValue);

    axios
      .patch(`http://localhost:5000/post-like/${id}`, { value: newValue })
      // .then(res=>res.json())
      .then((data) => {
        // console.log(data);

        if (data.status === 200) {
          toast.success("You liked this post");
          refetch();
          setRefresh(!refresh);
        }
      })
      .catch((e) => console.error("like error => ", e));

    // reaction storing to db
    axios
      .post(`http://localhost:5000/my-reaction`, {
        email: user?.email,
        like: true,
        postId: id,
      })
      .then((data) => {
        console.log(data);
        setRefresh(!refresh);
      })
      .then((e) => console.error("storing reaction error => ", e));
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    // console.log(comment);
    const commentInfo = {
      email: user?.email,
      postId: id,
      comment: comment,
      photoURL: user?.photoURL
    };
    axios
      .post(`http://localhost:5000/comment`, commentInfo)
      .then((data) => {
        console.log(data);
        if(data.status === 200){
          toast.success('Comment added');
          form.reset();
        }
      })
      .catch((e) => {
        console.error("commenting error => ", e);
      });

    axios
      .patch(`http://localhost:5000/post-comment/${id}`, { comment: comment, 
      // email: user?.email, displayName: user?.displayName 
    })
      // .then(res=>res.json())
      .then((data) => {
        // console.log(data);

        if (data.status === 200) {
          toast.success("Comment added");
          // refetch();
          // setRefresh(!refresh);
        }
      })
      .catch((e) => console.error("comment error => ", e));

    setRefresh(!refresh);
  };

  const count = post?.like || 0;
  // console.log(comments);
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-5">
        <div className="flex items-center p-5">
          <img className="w-20 h-20 rounded-full p-1" src={post?.photoURL} alt="" />
          <h1 className="text-2xl font-semibold">{post?.displayName}</h1>
        </div>
        <div className="flex flex-col gap-4 w-3/4 mx-auto py-5">
          <img className="rounded-lg shadow-lg" src={post?.image} alt="" />
          <p className="bg-teal-50 p-2 rounded-lg mt-3">{post?.post}</p>
        </div>
        <div className="border border-gray-200 w-3/4 mx-auto"></div>
        <div className="mx-20 py-5">
          <div>
            <button
              onClick={() => handleAddLike(count)}
              className="btn btn-info text-white"
              disabled={activities?.like === true || refresh === true}
            >
              <FaThumbsUp />
            </button>
          </div>
          <form onSubmit={handlePostComment} className="py-5 mx-auto">
            <div className="flex gap-3 pb-3">
              {user && (
                <div className="avatar">
                  <div className="w-14 h-14 rounded-full">
                    <img src={user?.photoURL} alt="" />
                  </div>
                </div>
              )}
              <textarea
                name="comment"
                required
                className="textarea textarea-info w-full"
                placeholder="Put your comment here"
              ></textarea>
              <div>
                <input
                  type="submit"
                  value="post"
                  className="btn btn-info text-white btn-sm "
                />
              </div>
            </div>
          </form>
          <div className="border border-b-gray-300 mb-5"></div>
          <div>
            {comments?.map((comment) => (
              <PostComments key={comment._id}
              comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetails;
