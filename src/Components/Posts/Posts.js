import { useEffect, useState } from "react"
import { API } from "../../Service/Api";
import Post from "./Post";
import '../../Style/style.css'
import { useSearchParams, Link } from 'react-router-dom'


const Posts = () => {

    const [posts, setPosts] = useState([]);

    //use search params for specific category to display that blog
    const [searchParams] = useSearchParams();
    //get category from searchParams
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            //pass category as params to getAllPosts function to access data based on these categories
            const response = await API.getAllPosts({ category: category || '' });
            if (response.isSuccess) {
                setPosts(response.data);
            }

        }
        fetchData();
        //if any change in category this function triggered
    }, [category])

    return (
        <>
            <div className="row">
                {posts && posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                            <Link to={`/details/${post._id}`}>
                                <Post post={post} />
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No Data Available to display</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Posts