import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Media = () => {
  const [posts, setPosts] = useState(["test"]);

  useEffect(() => {
    fetch("https://social-people-server.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      })
      .catch((e) => {
        console.error("posts getting error => ", e);
      });
  }, []);
  //   console.log(posts);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-5 ">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {posts?.map((post, i) => (
          <div
            key={i}
            className="flex flex-col bg-white m-3 rounded-lg shadow-lg "
          >
            <div className="p-2">
              <img className="rounded-lg" src={post.image} alt="" />
            </div>
            <div className="p-3 ">
              <p>{post.post}</p>
              <Link
                to={`/post-details/${post._id}`}
                className="mt-2 btn btn-info text-white "
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
