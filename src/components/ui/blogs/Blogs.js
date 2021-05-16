import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import { BlogContent } from './blog.style'

const Blogs = (props) => {

    return (
        <>
            <h4 className="blog-title">Follow us on Instagram for News, Offers & More</h4>
            <BlogContent>
                {props.fetched && props.blogs != null ? props.blogs.blogs.map(blog => {
                    return <Blog
                        key={Date.now() + Math.random()}
                        dir={blog.id}
                        text={blog.text}
                        createdAt={blog.postedDate}
                        image={blog.image}
                    />
                }) : 'no data'}
            </BlogContent>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
        fetched: state.fetched,
        fetching: state.fetching
    }

}


export default connect(mapStateToProps)(Blogs);
