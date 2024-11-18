import Navbar from '../Navbar'
import '../../Style/style.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { API } from '../../Service/Api.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../Context/DataProvider.jsx';
import Comments from './Comments/Comments.js';

const DetailView = () => {

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    const Navigate = useNavigate();
    const { account } = useContext(DataContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data)
            }
        }
        fetchData();
    }, [])

    const deleteBlog = async () => {

        const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
        if (!confirmDelete) return;

        setLoading(true);
        try {
            let response = await API.deletePost(post._id);
            alert("Blog deleted successfully!");
            if (response.isSuccess) {
                Navigate('/Home')
            }
        } catch (error) {
            console.error(error);
            alert("Failed to delete the blog.");
        }

    }

    return (
        <>
            <div>
                <div>
                    <Navbar />
                </div>
                <div className='container'>
                    <img src={url} alt="" className='img-fluid detailedViewImg' /><br /><br />

                    {
                        account.username === post.username && <>
                            <div className='d-flex' style={{ float: "right" }}>
                                <div className="me-3 image_icons" style={{ color: "blue" }}>
                                    <Link to={`/Update/${post._id}`}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Link>

                                </div>
                                <div className='image_icons' style={{ color: "red" }}>
                                    <FontAwesomeIcon icon={faTrash} onClick={() => { deleteBlog() }} />
                                </div>
                            </div>
                        </>
                    }

                </div>

                <div className="container" style={{ marginTop: "50px" }}>
                    <div className="text-center">
                        <h3 className="wordbreak">{post.title}</h3>


                    </div>
                    <div className='d-flex'>
                        <p>Author : <span style={{ paddingLeft: "2px" }}>{post.username} </span></p>
                        <p style={{ marginLeft: "auto", color: "grey" }}>Date: <span> {new Date(post.createdDate).toDateString()}</span></p>
                    </div>
                    <div>
                        <p>Description : <span className="wordbreak" style={{ paddingLeft: "10px" }}>{post.description}</span></p>
                    </div>
                    <div>
                        <Comments post={post} />
                    </div><br /><br />

                </div>
            </div >
        </>

    )
}

export default DetailView