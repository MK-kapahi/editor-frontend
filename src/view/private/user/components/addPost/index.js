import React, { useState } from 'react';
import CustomButton from '../../../../../components/atoms/customButton';
import ReactQuill from 'react-quill';

import { useDispatch } from 'react-redux';
import { addPost } from '../../../../../redux/action';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function AddPost() {

    const [editorHtml, setEditorHtml] = useState('');
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("userInfo"))

    const dispatch = useDispatch();
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video'],
            ['clean'],
            [{ 'color': [] }],
            ['emoji'],
        ],
    };

    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'link', 'image', 'video', "color", "emoji"
    ];

    const handleChange = (html) => {
        setEditorHtml(html);
    };

    const handleSave = () => {
        const data =
        {
            id: user._id,
            content: editorHtml
        }
        dispatch(addPost({ data, createPostReply }))
    }

    const createPostReply = (response) => {
        if (response.status == 200) {
            // toast.success("Post created Successfully", {
            //     position: toast.POSITION.TOP_RIGHT,
            // })
            navigate("/home")
        }

        else {
            toast.error(response?.response?.data?.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
        }
    }
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row d-flex flex-column justify-content-center align-content-center gap-5'>
                        <div className='col-lg-8'>

                            <ReactQuill
                                theme="snow"
                                modules={modules}
                                formats={formats}
                                value={editorHtml}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-lg-8'>
                            <div className='d-flex justify-content-center'>

                                <CustomButton className='btn btn-primary' onClick={handleSave} >
                                    create
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}
