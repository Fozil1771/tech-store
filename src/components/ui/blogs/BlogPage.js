import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogPage = ({ match, blogs, fetched, fetching }) => {

    let singleBlog = fetched ? blogs[1].blogs.find(blog => blog.id === Number(match.params.id)) : "no data"
    console.log(singleBlog)

    return (
        <div>
            <Link to="/">Back</Link>
            <p>{singleBlog.id}</p>
            <h2>{singleBlog.text}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
        fetched: state.fetched,
        fetching: state.fetching
    }

}


export default connect(mapStateToProps)(BlogPage)
