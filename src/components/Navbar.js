import React from "react";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Avatar from "@mui/material/Avatar";
import LanguageIcon from "@mui/icons-material/Language";
import { Button } from "@mui/material";
import "../css/Navbar.css";
import { useState } from "react";
import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { newPost } from "../features/FeedSlice";

function Navbar() {
  const [questionText, setQuestionText] = useState();
  const [linkText, setLinkText] = useState();
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users);
  const feed = useSelector((state) => state.feed);
  const loggedin = useSelector((state) => state.user.loggedin);

  const handleClick = () => {
    const postedBy = user[0];

    dispatch(
      newPost({ id: feed.length + 1, questionText, linkText, postedBy })
    );
    setQuestionText("");
    setLinkText("");
  };

  return (
    <div className='QHeader'>
      <div className='QHeader__logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png'
          className='img-responsive'
          alt='Image'
        />
      </div>
      <div className='QHeader__icons'>
        <div className='QHeader__icon'>
          <HomeIcon />
        </div>
        <div className='QHeader__icon'>
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className='QHeader__icon'>
          <PeopleAltOutlinedIcon />
        </div>
        <div className='QHeader__icon'>
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className='QHeader__icon'>
          <NotificationsNoneOutlinedIcon />
        </div>
      </div>
      <div className='QHeader__input'>
        <SearchOutlinedIcon />
        <input type='text' placeholder='Search Quora' />
      </div>

      <div className='QHeader__Rem'>
        <div className='QHeader__Avatar'>
          <Avatar onClick={() => dispatch(logout())} />
        </div>
        <LanguageIcon />
        <Button onClick={() => setOpenModal(true)}>Add Question</Button>
      </div>
      <div
        className='modal'
        style={openModal ? { display: "block" } : { display: "none" }}
      >
        <div className='modalHeader'>
          <h5>Add Question</h5>
          <h5>Share link</h5>
        </div>
        <div className='modalFields'>
          <input
            type='text'
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className='modalQuestionText'
          />
          <input
            type='link'
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
            className='modalLinkText'
          />
          <button type='button' onClick={handleClick}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
