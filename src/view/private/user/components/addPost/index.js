import React, { useState } from 'react';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Context } from '@ckeditor/ckeditor5-core';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import ReactQuill from 'react-quill';

export default function AddPost() {

    const [editorHtml, setEditorHtml] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video'],
            ['clean'],
            [{ 'color': [] }],
        ],
    };

    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'link', 'image', 'video' , "color"
    ];

    const handleChange = (html) => {
        console.log(html)
        setEditorHtml(html);
    };
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <ReactQuill
                            theme="snow"
                            modules={modules}s
                            formats={formats}
                            value={editorHtml}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </section >

        </>
    )
}
