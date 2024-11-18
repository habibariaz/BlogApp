// import React from 'react'
// import Comments from './Comments'

// const Comment = ({ comment }) => {
//     return (
//         <>
//             <div>
//                 <p>{comment.name}</p>
//             </div>
//             <div>
//                 <p>{comment.comments}</p>
//             </div>
//         </>
//     )
// }

// export default Comment
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import { useContext } from "react";
import { API } from "../../../Service/Api";
import { DataContext } from "../../../Context/DataProvider";

const Comment = ({ comment, setToggle }) => {
    const { account } = useContext(DataContext)

    const removeComment = async () => {
        let response = await API.deleteComment(comment._id);
        if (response.isSuccess) {
            setToggle(prevState => !prevState);

        }
    }
    return (
        <>
            <div style={{ background: "#f0f0f0", marginTop: "50px", paddingTop: "10px", paddingBottom: "10px" }}>
                <div className="d-flex">
                    <p className='ms-3'>{comment.name}</p>
                    <p style={{ marginLeft: "auto" }} >
                        {new Date(comment.date).toDateString()}

                        {comment.name === account.username &&
                            <FontAwesomeIcon icon={faTrash} className='ms-3' onClick={() => { removeComment() }} />
                        }
                    </p>
                </div>
                <p className='ms-3'>{comment.comments}</p>
            </div >

        </>

    )
}

export default Comment;