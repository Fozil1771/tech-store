import React from 'react'


import { Link } from 'react-router-dom'
import { BlogCard } from './blog.style'


function Blog(props) {
    return (
        <BlogCard>
            <Link to={`/blogs/blog/${props.dir}`}>
                <div className="blog-img">
                    <img src={props.image} alt="" />
                </div>
                <div className="blog-body">
                    <p>{props.text}</p>
                </div>
                <span className="blog-date">{props.createdAt}</span>
            </Link>
        </BlogCard>
    )
}



export default Blog;
