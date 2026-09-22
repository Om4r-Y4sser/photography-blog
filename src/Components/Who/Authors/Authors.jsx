import React from "react";
import data from "../../../data/posts.json";
import "./Authors.css";

export default function Authors() {

    const authors = [];

    data.posts.forEach((post) => {

        const exists = authors.some(
            (author) => author.name === post.author.name
        );

        if (!exists) {
            authors.push(post.author);
        }

    });

    return (
        <section className="authors-section" dir="rtl">

            <div className="container">

                {/* Badge */}
                <div className="authors-badge">
                    <span></span>
                    <span>فريقنا</span>
                </div>


                {/* Heading */}
                <h2 className="authors-title">
                    تعرف على كتابنا
                </h2>


                <p className="authors-description">
                    فريقنا من المصورين والكتاب ذوي الخبرة
                    شغوفون بمشاركة معرفتهم مع المجتمع.
                </p>


                {/* Authors */}
                <div className="row g-4 justify-content-center">

                    {authors.map((author) => (

                        <div
                            className="col-12 col-md-6 col-lg-4"
                            key={author.name}
                        >

                            <div className="author-card">

                                {/* Avatar */}
                                <div className="author-avatar-wrapper">

                                    <img
                                        src={author.avatar}
                                        alt={author.name}
                                        className="author-avatar"
                                    />

                                    {/* Verified Badge */}
                                    <div className="author-verified">

                                        <i className="fa-solid fa-check"></i>

                                    </div>

                                </div>


                                {/* Name */}
                                <h3>
                                    {author.name}
                                </h3>


                                {/* Role */}
                                <p className="author-role">
                                    {author.role}
                                </p>


                                {/* Social */}
                                <div className="author-socials">

                                    <a
                                        href="https://www.linkedin.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>

                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>

                                    <a
                                        href="https://x.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}