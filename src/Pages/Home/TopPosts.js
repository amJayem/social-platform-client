import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopPosts = () => {
  const [topPosts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/top-posts`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      });
  }, []);
  // console.log(topPosts);
  return (
    <div className="my-5">
      <h1 className="text-4xl font-bold">Top Posts</h1>
      <div className="my-5 grid grid-cols-3 gap-4">
        {topPosts?.map((topPost) => (
          <div key={topPost._id} >
            <div  className="bg-white h-96 rounded-lg shadow-lg p-3">
                <img className="rounded-lg h-56" src={topPost.image} alt="" />
                <div className="p-2 mb-10">
                    <p>{topPost.post}</p>
                </div>
                <div className="p-3 card-actions justify-end">
                    <Link className="btn btn-info">See Post</Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPosts;
