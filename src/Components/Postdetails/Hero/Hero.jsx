import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";

export default function Hero({ post }) {

    const categoryLink = `/Blog?category=${encodeURIComponent(post.category)}`;

    return (
        <section
            className="post-details-hero"
            style={{ backgroundImage: `url(${post.image})` }}
        >
            <div className="post-details-overlay"></div>
            <div className="post-details-fade"></div>
            <div className="post-details-breadcrumb">
                            <NavLink to="/">
                                <i className="fa-solid fa-house"></i>
                            </NavLink>
                            <span>‹</span>
                            <NavLink to="/Blog">المدونة</NavLink>
                            <span>‹</span>
                            <NavLink to={categoryLink}>{post.category}</NavLink>
                        </div>
            <div className="container">
                
            <div className="post-details-content">
                <div className="post-details-meta">
                    <NavLink to={categoryLink} className="post-details-category">
                        {post.category}
                    </NavLink>
                    <span>
                        <i className="fa-regular fa-calendar"></i>
                        {post.date}
                    </span>
                    <span>
                        <i className="fa-regular fa-clock"></i>
                        {post.readTime}
                    </span>
                </div>

                <h1>{post.title}</h1>

                <div className="post-details-author">
                    <img src={post.author.avatar} alt={post.author.name} />
                    <div>
                        <h3>{post.author.name}</h3>
                        <p>{post.author.role}</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}