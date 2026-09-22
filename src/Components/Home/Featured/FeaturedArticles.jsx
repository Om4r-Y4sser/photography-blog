import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../../data/posts.json";
import "./FeaturedArticles.css";

export default function FeaturedArticles() {

    const featuredPosts = data.posts
        .filter((post) => post.featured)
        .slice(0, 3);

    return (
        <section className="featured-section" dir="rtl">

            <div className="container">

                {/* Header */}
                <div className="section-header">

                    <div>

                        <div className="section-badge">
                            <span></span>
                            <span>مميز</span>
                        </div>

                        <h2>
                            مقالات مختارة
                        </h2>

                        <p>
                            محتوى منتقى لبدء رحلة تعلمك
                        </p>

                    </div>

                    <NavLink
                        to="/Blog"
                        className="section-view-all"
                    >
                        <span>عرض الكل</span>
                        <i className="fa-solid fa-arrow-left"></i>
                    </NavLink>

                </div>


                {/* Articles */}
                <div className="row g-4">

                    {featuredPosts.map((post) => (

                        <div
                            className="col-12"
                            key={post.id}
                        >

                            <article className="featured-card">

                                {/* Image */}
                                <div className="featured-image">

                                    <NavLink
                                        to={`/Blog/${post.slug}`}
                                    >
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                        />
                                    </NavLink>

                                    <span className="featured-badge">
                                        <i className="fa-solid fa-star"></i>
                                        مميز
                                    </span>

                                </div>


                                {/* Content */}
                                <div className="featured-content">

                                    <div>

                                        <div className="post-meta">

                                            <span className="category-badge">
                                                {post.category}
                                            </span>

                                            <span>
                                                <i className="fa-regular fa-clock"></i>
                                                {post.readTime}
                                            </span>

                                        </div>

                                        <h3>
                                            {post.title}
                                        </h3>

                                        <p>
                                            {post.excerpt}
                                        </p>

                                    </div>


                                    {/* Bottom */}
                                    <div className="featured-footer">

                                        <div className="author">

                                            <img
                                                src={post.author.avatar}
                                                alt={post.author.name}
                                            />

                                            <div>
                                                <strong>
                                                    {post.author.name}
                                                </strong>

                                                <span>
                                                    {post.date}
                                                </span>
                                            </div>

                                        </div>

                                        <NavLink
                                            to={`/Blog/${post.slug}`}
                                            className="read-link"
                                        >
                                            <span>اقرأ المقال</span>
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </NavLink>

                                    </div>

                                </div>

                            </article>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}