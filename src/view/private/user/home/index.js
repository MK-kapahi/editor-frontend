import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllPost } from '../../../../redux/action';
import ShowPost from '../components/showPost';

export default function Home() {

    const dispatch = useDispatch();
    const data = useSelector(state => state?.postReducer?.payload)
    useEffect(() => {
        dispatch(getAllPost({}))
    }, [])
    return (
        <>
           <ShowPost  postData={data}></ShowPost>
            {/* <ShowPost postData={data}></ShowPost> */}
        </>
    )
}
