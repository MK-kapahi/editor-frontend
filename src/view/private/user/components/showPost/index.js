import React, { useState } from 'react';
import "./style.css"
import AddComment from '../AddComment';
import CustomButton from '../../../../../components/atoms/customButton';
import { useDispatch, useSelector } from 'react-redux';
import { getComment } from '../../../../../redux/action';
import CommentDisplay from '../comment';
import { format , differenceInHours } from 'date-fns';



export default function ShowPost({ postData }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userInfo"))
  const [commentSection, showCommentSection] = useState(false)
  console.log(postData)
  const handleShowComment = (postId) => {
    const id = postId;

    if (commentSection) {
      showCommentSection(false)

    }

    else {

      showCommentSection(true)
      dispatch(getComment({ id }))
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
  const commentData = useSelector(state => state?.commentReducer?.payload)
  return (
    <>
      <section>
        <div className='container'>
          <div className='row ' >
            <div className='col'>

              <div className='d-flex flex-column  align-items-center  justify-content-center gap-5'>

                {postData?.map((element) => {
                  return (
                    <div className='post-content-div '>


                      <section className="container-post">
                        <div className="card">
                          <div className="card-header d-flex justify-content-between">


                            <div className="profile-info">
                              <div className="name">{element?.userId?.userName}</div>
                              {/* <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Miami, Florida</div> */}
                            </div>

                            <div className="time">
                             {formatCreatedAt(element?.createdAt)}
                            </div>
                          </div>

                          <div className="content">
                            <div dangerouslySetInnerHTML={{ __html: element?.content }} />

                          </div>

                          <div className="card-footer">

                            <div className="comments">
                              { commentSection ? <CommentDisplay postId={element?._id} comments={commentData} userId={user?._id} /> : ""}
                            </div>
                            <hr />


                            <div className="add-comment">
                              <div className='d-flex justify-content-between' >
                                <div className='addComment-text'>
                                  <AddComment postId={element?._id} userId={user?._id} parentId={null} />
                                </div>
                                <CustomButton onClick={() => handleShowComment(element._id)} className="show-comment-btn">show Comments </CustomButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
