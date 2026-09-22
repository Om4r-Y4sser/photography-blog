import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../../data/posts.json";
import "./LatestArticles.css";

export default function LatestArticles() {

    const latestPosts = [...data.posts]
        .sort(
            (a, b) =>
                new Date(b.date) - new Date(a.date)
        )
        .slice(0, 3);

    return (
        <section className="latest-section" dir="rtl">

            <div className="container">

                {/* Header */}
                <div className="section-header">

                    <div>

                        <div className="section-badge">
                            <span></span>
                            <span>الأحدث</span>
                        </div>

                        <h2>
                            أحدث المقالات
                        </h2>

                        <p>
                            محتوى جديد طازج من المطبعة
                        </p>

                    </div>

                    <NavLink
                        to="/Blog"
                        className="section-view-all"
                    >
                        <span>عرض جميع المقالات</span>
                        <i className="fa-solid fa-arrow-left"></i>
                    </NavLink>

                </div>


                {/* Cards */}
                <div className="row g-4">

                    {latestPosts.map((post) => (

                        <div
                            className="col-12 col-md-6 col-lg-4"
                            key={post.id}
                        >

                            <article className="latest-card">

                                {/* Image */}
                                <div className="latest-image">

                                    <NavLink
                                        to={`/Blog/${post.slug}`}
                                    >
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                        />
                                    </NavLink>

                                    {post.featured && (
                                        <span className="featured-badge">
                                            <i className="fa-solid fa-star"></i>
                                            مميز
                                        </span>
                                    )}

                                </div>


                                {/* Content */}
                                <div className="latest-content">

                                    <div className="latest-meta">

                                        <div>
                                            <span className="category-badge">
                                                {post.category}
                                            </span>

                                            <span>
                                                <i className="fa-regular fa-clock"></i>
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <span>
                                            {post.date}
                                        </span>

                                    </div>


                                    <NavLink
                                        to={`/Blog/${post.slug}`}
                                        className="latest-title"
                                    >
                                        {post.title}
                                    </NavLink>


                                    <p>
                                        {post.excerpt}
                                    </p>


                                    {/* Footer */}
                                    <div className="latest-footer">

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