import { useRef, useState } from "react";

import { FcBusinessman } from "react-icons/fc";
import { GrAttachment } from "react-icons/gr";
import { MdEmojiEmotions } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

import classes from "./Chatbox.module.css";

const Chatbox = (props) => {
  const messInputRef = useRef();
  const [messArr, setMessArr] = useState([]);

  const addMess = () => {
    // Lấy thông tin message từ ô input
    const enteredMess = messInputRef.current.value;

    // Message nếu ko trống thì add vào mảng messArr
    if (enteredMess.trim() !== "") setMessArr((mess) => [...mess, enteredMess]);
    messInputRef.current.value = "";
  };

  // Hàm bấm enter
  window.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addMess();
    }
  });

  // Hàm click vào nút gửi
  const sendMessHandler = (e) => {
    e.preventDefault();
    addMess();
  };

  //Hàm tắt cửa sổ popup
  const closeChatboxHandler = () => {
    props.closeChatboxHandler();
  };

  const clearMessHandler = () => {
    setMessArr([]);
  };

  return (
    <section className={classes.chatbox}>
      <div className={classes.chat_title}>
        <h4>Customer Support</h4>
        <div className={classes.title_right}>
          <button className={classes.btn_show} onClick={clearMessHandler}>
            Let's Chat App
          </button>
          <button className={classes.btn} onClick={closeChatboxHandler}>
            x
          </button>
        </div>
      </div>
      <div className={classes.chat_content}>
        {messArr &&
          messArr.map((mes) => <p className={classes.chat_mess}>{mes}</p>)}
      </div>
      <div className={classes.chat_tool}>
        <span className={classes.chat_manager}>
          <FcBusinessman />
        </span>
        <input
          type="text"
          placeholder="Enter Messase"
          ref={messInputRef}
          onSubmit={sendMessHandler}
        ></input>
        <span className={classes.emotion}>
          <GrAttachment />
        </span>
        <span className={classes.emotion}>
          <MdEmojiEmotions />
        </span>
        <button className={classes.btn} onClick={sendMessHandler}>
          <IoIosSend />
        </button>
      </div>
    </section>
  );
};

export default Chatbox;
