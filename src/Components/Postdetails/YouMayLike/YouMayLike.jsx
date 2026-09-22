import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../../data/posts.json";
import './YouMayLike.css'; // Make sure to import the CSS file

export default function YouMayLike({ post }) {
    const relatedPosts = data.posts
        .filter(
            (item) =>
                item.category === post.category &&
                item.slug !== post.slug
        )
        .slice(0, 3);

    return (
        <section className="you-may-like" dir="rtl">
            <div className="container">
                <div className="line"></div>
                {/* Header */}
                <div className="you-may-like-header">
                    <div className="widget-header">
                        <div className="header-icon">
                            <i className="fa-solid fa-image"></i>
                        </div>
                        <div className="header-text">
                            <h2>مقالات قد تعجبك</h2>
                            <p>استكشف المزيد من المحتوى المميز</p>
                        </div>
                    </div>

                    <NavLink to="/Blog" className="view-all-link">
                        عرض الكل
                        <i className="fa-solid fa-arrow-left"></i>
                    </NavLink>
                </div>

                {/* Posts */}
                <div className="row g-4">
                    {relatedPosts.map((relatedPost) => (
                        <div className="col-md-4" key={relatedPost.id}>
                            <NavLink
                                to={`/Blog/${relatedPost.slug}`}
                                className="related-post-card"
                            >
                                {/* Background Image */}
                                <img
                                    src={relatedPost.image}
                                    alt={relatedPost.title}
                                    className="post-bg-img"
                                />

                                {/* Category Badge */}
                                <span className="related-post-category">
                                    {relatedPost.category}
                                </span>

                                {/* Card Content (Bottom) */}
                                <div className="related-post-content">
                                    <h3>{relatedPost.title}</h3>

                                    <div className="related-post-meta">
                                        <span className="read-time">
                                            {relatedPost.readTime}
                                        </span>

                                        <span className="author-info">
                                            {relatedPost.author.name}
                                            <img 
                                                src={relatedPost.author.avatar} 
                                                alt={relatedPost.author.name} 
                                            />
                                        </span>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}