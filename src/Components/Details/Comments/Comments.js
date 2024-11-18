import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../../../Style/style.css'
import { DataContext } from '../../../Context/DataProvider';
import { API } from '../../../Service/Api';
import Comment from './Comment';

// import { newComment } from '../../../../../Backend/controller/Comment_controller.js';

const initialValues = {
    name: '',
    postId: '',
    comments: '',
    date: new Date(),
}

const Comments = ({ post }) => {

    const [comment, setComment] = useState(initialValues);
    const { account } = useContext(DataContext);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        const getData = async () => {
            let response = await API.getAllComments(post._id);
            if (response.isSuccess) {
                setComments(response.data)
            }
        }
        getData();
    }, [post, toggle])

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments: e.target.value
        })
    }

    const addComment = async (e) => {
        try {
            let response = await API.newComment(comment);
            alert("Comment Posted Successfully...!!!");
            if (response.isSuccess) {
                setComment(initialValues);
            }
            setToggle(prevState => !prevState)
        } catch (error) {
            console.error(error);
            alert("Failed to post the comment.");
        }

    }



    return (
        <>
            <div>
                <div className="d-flex">
                    <FontAwesomeIcon icon={faUser} size="3x" className='mt-2' />
                    <textarea
                        name="comment"
                        id="comment"
                        value={comment.comments}
                        className="form-control ms-4 me-4"
                        placeholder="What's on your mind?"
                        onChange={(e) => handleChange(e)}
                    >
                    </textarea>
                    <button className='btn btn-success post_btn' onClick={() => addComment()}>Post</button>
                </div>

                {/* Display comments */}
                <div>
                    {comments && comments.length > 0 ? (
                        comments.map((cmt) => (
                            <Comment key={cmt._id} comment={cmt} setToggle={setToggle} />
                        ))
                    ) : (
                        <p>No comments yet. Be the first to comment!</p>
                    )}
                </div>

            </div>
        </>
    )
}

export default Comments