import React, { useState } from 'react'
import CustomInputFields from '../../../../../components/atoms/customInput'
import CustomButton from '../../../../../components/atoms/customButton'
import EmojiPicker from 'emoji-picker-react';
import "./style.css"
import { useDispatch } from 'react-redux';
import { addComment } from '../../../../../redux/action';
import InputEmoji from "react-input-emoji";


export default function AddComment({ postId, userId, parentId }) {
  const [isEmojiPickerVisible, setEmojiPickerVisibility] = useState(false);
  const [comment, setComment] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();


  function handleOnEnter(text) {
    const data = {
      postId: postId,
      userId: userId,
      comment: text,
      parentId: parentId
    }

    dispatch(addComment({ data }))

    setComment("")
  }

  const toggleEmojiPicker = () => {
    setEmojiPickerVisibility(!isEmojiPickerVisible);
  };

  const handleInputChange = (e) => {

    setComment(e.target.value)
  }
  const handleEmojiSelection = (event, emojiObject) => {
    const selectedEmoji = emojiObject.emoji;
    // console.log(selectedEmoji)
    setComment((prevComment) => prevComment + selectedEmoji);
    setEmojiPickerVisibility(false);
  };
  const handleAddComment = () => {
    

  }
  return (
    <div className='d-flex justify-content-around'>

      <div className='d-flex text-emoji justify-content-around'>

        {/* <CustomInputFields type="text" className="comment-text" value={comment} onChange={handleInputChange} ></CustomInputFields> */}
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
        {/* <CustomButton onClick={toggleEmojiPicker} className="btn">😀</CustomButton> */}
        {/* {isEmojiPickerVisible ? <EmojiPicker onEmojiClick={handleEmojiSelection} open={true} /> : " "} */}
      </div>
      
      {/* <CustomButton type="button" className="btn btn-primary add-comment-btn" onClick={handleAddComment}>Add </CustomButton> */}
    </div>
  )
}
