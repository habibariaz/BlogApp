import React, { useContext, useEffect, useState } from 'react'
import '../../Style/style.css'
import Navbar from '../Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../../Context/DataProvider';
import { API } from '../../Service/Api';

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreatePost = () => {

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);
    const [loading, setLoading] = useState(false);


    const { id } = useParams();

    const location = useLocation();
    const navigate = useNavigate();

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    //Fetch Data from DB on the basis of Id
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data)
            }
        }
        fetchData();
    }, [])

    //It triggered when u edit ur blog image
    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                console.log("FormData after append:", data.get("file"));  // Should log the File object

                const response = await API.uploadFile(data);
                post.picture = response.data;
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file])


    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const UpdateBlogPost = async () => {
        // event.preventDefault();

        const confirmDelete = window.confirm("Are you sure you want to update this blog?");
        if (!confirmDelete) return;
        setLoading(true);

        try {
            let response = await API.updatePost(post);
            if (response.isSuccess) {
                navigate(`/Details/${id}`)
            }
        } catch (error) {
            console.error(error);
            alert("Failed to update the blog.");
        }

    }

    return (
        <>
            <div>
                <Navbar />
                <div className='container'>
                    <img src={url} className="img-fluid blogImgHeight" alt="..." />
                </div>

                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mb-3 mb-sm-0">
                            <div className="card cards_border_none">
                                <div className="card-body ">
                                    <div className="d-flex">
                                        <div className='mt-2'>
                                            <label htmlFor="fileInput"><FontAwesomeIcon icon={faFileCirclePlus} /></label>

                                        </div>
                                        <input
                                            type="file"
                                            name="fileInput"
                                            id="fileInput"
                                            className='form-control'
                                            style={{ display: "none" }}
                                            onChange={(e) => {
                                                const selectedFile = e.target.files[0];
                                                setFile(selectedFile);  // Update state
                                            }}
                                        />
                                        <input type="text" className='form-control' placeholder='Title' style={{ border: "none" }} name='title' value={post.title} onChange={(e) => handleChange(e)} /><br />
                                        <button className='btn btn-dark' onClick={() => { UpdateBlogPost() }}>Update</button>
                                    </div> <br />
                                    <div>
                                        <textarea
                                            name='description' id="" className='form-control' placeholder='Tell Your Story...' style={{ border: "none" }} value={post.description} onChange={(e) => handleChange(e)} >
                                        </textarea>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost