import React from 'react'
import BlogAside from '../blog-aside/BlogAside'
import SingleBlog from './single-blog/SingleBlog'

const BlogDetail = () => {
  return (
    <>
        <section className="blogSec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <SingleBlog />
            </div>
            <div className="col-md-4">
              <BlogAside />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetail