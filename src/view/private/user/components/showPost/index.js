import React, { useState } from 'react';
import "./style.css"
import AddComment from '../AddComment';
import CustomButton from '../../../../../components/atoms/customButton';
import { useDispatch, useSelector } from 'react-redux';
import { getComment } from '../../../../../redux/action';
import CommentDisplay from '../comment';



export default function ShowPost({ postData }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userInfo"))
  const [commentSection, showCommentSection] = useState(false)
  const handleShowComment = (postId) => {
    const id = postId;

    showCommentSection(true)
    dispatch(getComment({ id }))

  }
  const commentData = useSelector(state => state?.commentReducer?.payload)
  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col'>

              <div className='d-flex'>

                {postData?.map((element) => {
                  return (
                    <div className='post-content-div'><div dangerouslySetInnerHTML={{ __html: element?.content }} />
                      <AddComment postId={element?._id} userId={user?._id} parentId={null} /> <CustomButton onClick={() => handleShowComment(element._id)}>show Comments </CustomButton>
                      {commentSection ? <CommentDisplay postId={element?._id} comments={commentData} userId={user?._id}  /> : ""}
                    </div>)
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
