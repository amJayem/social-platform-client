import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useAuthProvider from "../../hooks/useAuthProvider";
import { Link } from "react-router-dom";
import Spinner from "../../hooks/useSpinner";

const PostSection = () => {
  const { user, loading, setLoading } = useAuthProvider();
  const imgHostingKey = process.env.REACT_APP_imgbb_key;

  const handlePost = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    let post = form.post.value;

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

    // storing image to imgbb
    axios
      .post(url, formData)
      .then((imgData) => {
        if (imgData.status === 200) {
          const image = imgData.data.data.display_url;
          // storing post to db
          axios
            .post(`http://localhost:5000/post`, {
              post,
              image,
              displayName: user?.displayName,
              photoURL: user?.photoURL,
            })
            .then((postData) => {
              toast.success("Post success");
              setLoading(false);
            })
            .catch((e) => {
              console.error("posting error => ", e);
            });
        }
      })
      .catch((e) => {
        console.error("imgbb error => ", e);
      });

    console.log(image, post, formData);
  };

  return (
    <div className="">
      <div className="bg-white mt-5 p-5 rounded-lg shadow-md">
        <form onSubmit={handlePost}>
          <div className="flex flex-nowrap">
            {user?.uid && (
              <div className="avatar p-3">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img alt="" src={user?.photoURL} />
                </div>
              </div>
            )}
            <textarea
              name="post"
              className="textarea textarea-primary w-full"
              placeholder="Write your post"
              required
            ></textarea>
          </div>
          <input
            name="image"
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs mt-5"
            required
          />
          <div className="border-b mt-2"></div>
          <div className="mt-2">
            {loading ? (
              <Spinner />
            ) : (
              <input
                type="submit"
                className="btn bg-primary"
                value="Post"
                disabled={!user?.uid}
              />
            )}{" "}
            <br />
            <Link to="login" hidden={user?.uid} className="text-error">
              {" "}
              Login to post
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostSection;
