import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularPosts = () => {
    const [popularPost, setPopularPost] = useState();
  useEffect(() => {
    fetch(`https://social-people-server.vercel.app/popular-posts`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPopularPost(data)
      })
      .catch((e) => {
        console.error("getting activities error => ", e);
      });
  }, []);

  return (
    <div className="my-5">
      <h1 className="text-4xl font-bold">Popular Posts</h1>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularPost?.map((post) => (
          <div key={post._id}>
            <div className="bg-white rounded-lg shadow-lg p-3">
              <img className="rounded-lg" src={post.image} alt="" />
              <div className="p-2 mb-10">
                <p>{post.post}</p>
              </div>
              <div className="p-3 card-actions justify-end">
                <Link to={`post-details/${post._id}`} className="btn btn-info text-white">See Post</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
