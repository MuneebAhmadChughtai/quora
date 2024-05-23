import React from "react";
import { useSelector } from "react-redux";
import { selectAnswer, currentAnswer } from "../features/answerSlice";
import { answers } from "../features/answerSlice";
import "../css/Answer.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DoneIcon from "@mui/icons-material/Done";

function Answer(props) {
  const buttonstyles = {
    fontSize: 20,
    fontWeight: 500,
    color: "#111111",
    backgroundColor: "inherit",
  };
  console.log("props",props)
  const user = useSelector((state) => state.user);
  const answer = useSelector(state=> state.answer);
  const question = useSelector((state) => state.question);

  const [replyField, setReplyField] = useState("");
  const [openReplyField, setOpenreplyField] = useState(false);
  const [btnState, setBtnState] = useState("Edit");
  const dispatch = useDispatch();

  const handleButton = () => {
    if (btnState === "Edit") {
      setOpenreplyField(true);
      setBtnState(() => "Update");
      setReplyField(()=> props.ans.ansText)
      dispatch(answers({ ...props }));
    } else {
      dispatch(answers({ ...props }));
      setOpenreplyField(false);
      setBtnState( ()=> "Update");
    }
  };

  return (
    <div
      className='post__answer'
      onClick={() =>
        dispatch(
          currentAnswer({
            ansId: props.ansId,
            ansText: props.ansText,
            PostedBy: props.postedBy,
          })
        )
      }
    >
      <div className='post__answerAuthorAndtext'>
        <small>
          {props["ans"]["postedBy"]["displayName"] ||
            props["ans"]["postedBy"]["email"]}
        </small>
         
      </div>
      {user.loggedin.email === props["ans"]["postedBy"]["email"] ? (
        <>
          {
            <>
              {openReplyField ? 
                <input
                  className='post__answerReplyInput'
                  value={replyField}
                  onChange={(e) => setReplyField(e.target.value)}
                /> :                
                <p key={props.key} >{props["ans"]["ansText"]}</p>
              }
            </>
          }
          <button onClick={handleButton}>
            {btnState === "Edit" ? (
              <ModeEditIcon
                size='small'
                varaiant='contained'
                sx={buttonstyles}
              />
            ) : (
              <DoneIcon />
            )}
          </button>
        </>
      ): <p key={props.key} >{props["ans"]["ansText"]}</p>}
    </div>
  );
}

export default Answer;
