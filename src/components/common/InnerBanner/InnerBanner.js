import React from "react"
import { Link } from "react-router-dom"

function InnerBanner() {
    return (
        <>
        <section className="page-title page-title-2" style={{backgroundImage: 'url("http://fastwpdemo.com/newwp/paanee/wp-content/uploads/2021/10/image-26.png")'}}>
  <div className="auto-container">
    <div className="content-box">
      <div className="content-wrapper">
        <div className="title">
          <h1>About Us</h1>
        </div>
        <ul className="bread-crumb clearfix">
          <li className="breadcrumb-item">
            <Link to="/home">Home &nbsp;</Link>
          </li>
          <li className="breadcrumb-item">About Us</li>
        </ul>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
export default InnerBanner