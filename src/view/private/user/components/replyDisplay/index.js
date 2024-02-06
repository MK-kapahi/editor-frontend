import React , {useState}from 'react';
import CustomButton from '../../../../../components/atoms/customButton';
import AddComment from '../AddComment';

export default function DisplayReply({postId , comments , userId , commentId}) {

    const [replyDiv, setReplyDiv] = useState(false)
    const handleAddReply =() => {

    }

    return (
        <>
            <div className='d-flex flex-column  align-items-center mt-3'>

                {
                    comments?.filter(element => element.parentId === commentId).map((element) => {
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
                                <div className="footer-comment">
                                    <button className="btn"><i class="ri-emotion-line"></i></button>
                                    <div className="divider"></div>
                                    <CustomButton onClick={handleAddReply}>Reply</CustomButton>
                                    {replyDiv ? <AddComment postId={postId} userId={userId} parentId={element._id} ></AddComment> : ""}
                                    <div className="divider"></div>
                                    <span className="is-mute">{element?.createdAt}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}
