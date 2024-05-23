import React, { useEffect, useState } from "react";
import "../css/Feed.css";
import Quorabox from "./Quorabox";
import Post from "./Post";
import { useSelector } from "react-redux";

function Feed() {
  const feed = useSelector((state) => state.feed);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(() => feed);
  }, [questions]);

  return (
    <div className='feed'>
      <Quorabox />
      {feed?.map((question, index) => (
        <Post key={index} question={question} />
      ))}
    </div>
  );
}

export default Feed;
