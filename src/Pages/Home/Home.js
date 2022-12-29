import React from "react";
import PostSection from "./PostSection";
import TopPosts from "./TopPosts";

const Home = () => {
  return (
    <div className="">
      <div>
        <PostSection />
      </div>
      <div>
        <TopPosts />
      </div>
    </div>
  );
};

export default Home;
