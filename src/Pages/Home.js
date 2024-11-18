import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// import blog from '../Images/blog.png'

import '../Style/style.css'
import { categories } from '../Constants/Data'
import { Link, useSearchParams } from 'react-router-dom'
import Post from '../Components/Posts/Posts'

const Home = () => {

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category')

    return (
        <>
            <div id='home-mainImg'>
                <div>
                    <Navbar />
                </div>
            </div>

            <div className="cardoverflow">
                <div className="row">
                    <div className="col-sm-3 mb-3 mb-sm-0">
                        <div className="card cardShadow">
                            <div className="card-body ">
                                <div className="text-center">
                                    <Link to={`/Create?category=${category || ''}`}>
                                        <button className='btn btn-primary' style={{ width: "100%" }}>
                                            Create A Blog
                                        </button>
                                    </Link>

                                </div><br />
                                <div className="list-group">
                                    <Link to='/Home' className="list-group-item list-group-item-action">
                                        All Categories
                                    </Link>
                                    {
                                        categories.map(category => (

                                            <div key={category.id} className="list-group-item list-group-item-action">
                                                <Link to={`/Home?category=${category.type}`}>
                                                    {category.type}
                                                </Link>
                                            </div>

                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-9">
                        <div className="card cards_border_none">
                            <div className="card-body ">
                                <Post />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: "100px" }}>
                <Footer />
            </div>
        </>
    )
}

export default Home