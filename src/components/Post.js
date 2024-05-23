import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "../css/Post.css";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import { useSelector, useDispatch } from "react-redux";
import Answer from "./Answer";
import { currentQuestion } from "../features/questionSlice";
import { updatePost, insertAnswer } from "../features/FeedSlice";

function Post(props) {
  const user = useSelector((state) => state.user);
  const feed = useSelector((state) => state.feed);
  const question = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const id = props.question.id;
  const questiontext = props.question.questionText;
  const [questionText, setQuestionText] = useState(questiontext);
  const linkText = props.question.linkText;
  const postedBy = props.question.postedBy;
  const answers = props.question.answers || [];
  const [questionField, setQuestionField] = useState("text");
  const [ansInputField, setAnsInputField] = useState(false);
  const [ansField, setAnsField] = useState("");
  let index = 0;
  // console.log("test",answers)
  const handleQuestionEdit = () => {
    setQuestionField("text");
    const questions = feed;
    const questionsToLocalStoarage = questions.map((question) => {
      if (question["id"] === id) {
        dispatch(updatePost({ id, questionText }));
      } else {
        return { ...question };
      }
    });
  };

  const handleanswer = () => {
    if (ansInputField === false) {
      setAnsInputField(() => true);
    } else {
      const questions = feed;
      let ans = {
        ansId: question.answers.length + 1,
        ansText: ansField,
        postedBy: user.loggedin,
      };
      dispatch(insertAnswer({ id: question.id, ans }));
      setAnsInputField(false);
    }
  };

  return (
    <div
      className='post'
      onClick={(e) =>
        dispatch(
          currentQuestion({ id, linkText, questionText, postedBy, answers })
        )
      }
    >
      <div className='post__header'>
        <Avatar />
        <div>
          <p className='post__userinfo'>
            {postedBy["displayName"] || postedBy["email"]}
          </p>
          <p className='post__userinfo'> 
           {answers?.length >=1 ?  "Answered By" :""}
          </p>
          {console.log("answeredby", answers[1])}
          <p classname='post__useranswered'>
           
            {answers.length === 0 ||
               answers.slice(-1)[0].postedBy.displayName ||
              answers.slice(-1)[0].postedBy.email ||
              ""}
          </p>
          <p className='post__answeres'></p>
        </div>
      </div>
      {questionField === "text" ? (
        <>
          <h3 className='post__question'>{questionText}</h3>
          {user.loggedin.email === postedBy.email && (
            <button onClick={() => setQuestionField("input")}>Edit</button>
          )}
          {ansInputField && (
            <input
              type='text'
              className='post__ansField'
              onChange={(e) => setAnsField(e.target.value)}
            />
          )}
          <button onClick={handleanswer}>Answer</button>
        </>
      ) : (
        <>
          <input
            value={questionText}
            type='text'
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <button onClick={handleQuestionEdit}>Done</button>
        </>
      )}

      <img src={linkText} alt='' />
      <p className='post_latest_ans'></p>
      <div className='post__footer'>
        <div className='post__footerAction'>
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>

        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />

        <div className='post__footerleft'>
          <ShareOutlinedIcon />
          <MoreHorizOutlinedIcon />
        </div>
      </div>
      <div className='post__answeres'>
        {answers?.map((item, index) => {
          return (
            <div key={index} className='post__answerRow'>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
              <div className='post__ans'>
                <Answer ans={item} />{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Post;
