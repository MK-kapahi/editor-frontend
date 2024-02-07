import React, { useState } from 'react';
import "./style.css"
import CustomButton from '../../../../../components/atoms/customButton';
import AddComment from '../AddComment';
import { useDispatch } from 'react-redux';
import { getComment } from '../../../../../redux/action';
import DisplayReply from '../replyDisplay';
import { format , differenceInHours } from 'date-fns';
export default function CommentDisplay({ postId, comments, userId }) {

    const dispatch = useDispatch()
    const [replyDiv, setReplyDiv] = useState(false)
    const [commentSection, showCommentSection] = useState(false)
    const handleShowComment = (postId, commentId, index) => {
        const id = postId;

        if (commentSection) {
            showCommentSection(false)
        }

        else {

            const commentIndex = comments.findIndex(element => element._id == commentId)

            if (commentIndex == index) {
                showCommentSection(true)
                dispatch(getComment({ id }))

            }

        }

    }
    const formatCreatedAt = (createdAt) => {
        const currentDate = new Date();
        const commentDate = new Date(createdAt);
        const hoursDifference = differenceInHours(currentDate, commentDate);

        if (hoursDifference < 24) {
            // Less than 24 hours, show time
            return format(commentDate, 'hh:mm:ss a');
        } else {
            // More than 24 hours, show only date
            return format(commentDate, 'MM/dd/yyyy');
        }
    };
    const handleAddReply = () => {

        if(replyDiv)
        {
            setReplyDiv(false)
        }

        else 
        {
            setReplyDiv(true)
        }
    }
    return (
        <>
            <div className='d-flex flex-column  align-items-center mt-3'>

                {
                    comments?.filter(element => element.parentId === null).map((element, index) => {
                        return (

                            <div className="comment">
                                <div className="user-banner">
                                    <div className="user">
                                        <div className="avatar">
                                            <img src="https://randomuser.me/api/portraits/men/86.jpg" />
                                            <span className="stat grey"></span>
                                        </div>
                                        <h5>{element.userId.userName}</h5>
                                    </div>
                                    <button className="btn dropdown"><i className="ri-more-line"></i></button>
                                </div>
                                <div className="content">
                                    <p>{element.comment}</p>
                                </div>
                                <div className="footer-comment ">
                                    <button className="btn-comment"><i class="ri-emotion-line"></i></button>
                                    <div className="divider"></div>
                                    <CustomButton onClick={handleAddReply}>Reply</CustomButton>
                                    {/* {replyDiv ? <AddComment postId={postId} userId={userId} parentId={element._id} ></AddComment> : ""} */}
                                    <div className="divider"></div>
                                    <CustomButton onClick={() => handleShowComment(postId, element._id, index)} className="show-comment-btn">show Replies</CustomButton>

                                    <span className="is-mute">{formatCreatedAt(element?.createdAt)}</span>
                                </div>
                                {replyDiv ? <AddComment postId={postId} userId={userId} parentId={element._id} ></AddComment> : ""}
                                {commentSection ? <DisplayReply postId={postId} comments={comments} userId={userId} commentId={element._id} /> : ""}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

