import React, { useState } from 'react';
import CustomButton from '../../../../../components/atoms/customButton';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../../../redux/action';
import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';


export default function AddPost() {

    const [editorHtml, setEditorHtml] = useState('');
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
        'list', 'bullet', 'link', 'image', 'video', "color" , "emoji"
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
        dispatch(addPost({ data }))
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
