import React from "react";
import './PostContent.css'
import { NavLink } from "react-router-dom";

export default function PostContent({ post }) {
    const sections = post.content.split("\n\n");

    const headings = sections
        .map((section, index) => {
            if (section.startsWith("## ")) {
                return {
                    title: section.replace("## ", ""),
                    id: `section-${index}`
                };
            }
            return null;
        })
        .filter(Boolean);
    const formattedDate = new Date(post.date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
});
    return (
        <section className="post-content" dir="rtl">
            <div className="container">
                <div className="row post-layout-row">
                    
                    {/* RIGHT SIDEBAR */}
                    <aside className="col-lg-4 sidebar-column">
                        <div className="post-sidebar">
                            
                            {/* Table of Contents */}
                            <div className="table-of-contents">
                                <div className="widget-header">
                                    <h3>محتويات المقال</h3>
                                </div>

                                {headings.map((heading) => (
                                    <button
                                        key={heading.id}
                                        onClick={() => {
                                            document
                                                .getElementById(heading.id)
                                                .scrollIntoView({
                                                    behavior: "smooth"
                                                });
                                        }}
                                    >
                                        {heading.title}
                                    </button>
                                ))}
                            </div>

                            {/* Post Information */}
                            <div className="post-info">
                                <div>
                                    <div className="bg-black py-3 px-4 rounded-4 d-flex flex-column align-items-center">
                                      <i className="fa-regular fa-calendar"></i>
                                    <span>{formattedDate}</span>
                                    <p>تاريخ النشر</p>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="bg-black py-3 px-4 rounded-4 d-flex flex-column align-items-center">
                                      <i className="fa-regular fa-clock"></i>
                                    <span>{post.readTime}</span>
                                    <p>وقت القراءة</p>
                                    </div>
                                </div>
                            </div>

                            {/* Back To Blog / Newsletter */}
                            <div className="back-to-blog">
                                <div className="icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <h3>لا تفوّت جديدنا</h3>
                                <p>اشترك للحصول على أحدث المقالات</p>
                                <NavLink to="/Blog">
                                    العودة الي المدونة
                                </NavLink>
                            </div>
                        </div>
                    </aside>

                    {/* LEFT ARTICLE */}
                    <main className="col-lg-8 article-column">
                        
                        {/* Post Description */}
                        <p className="post-description">
                            {post.excerpt}
                        </p>

                        {/* Article */}
                        <article className="post-article">
                            <h2>{post.title}</h2>

                            {sections.map((section, index) => {
                                if (section.startsWith("## ")) {
                                    return (
                                        <h3 key={index} id={`section-${index}`}>
                                            <div className="heading-icon">
                                                <i className="fa-solid fa-camera"></i>
                                            </div>
                                            {section.replace("## ", "")}
                                        </h3>
                                    );
                                }

                                return (
                                    <p key={index}>
                                        {section}
                                    </p>
                                );
                            })}
                        </article>

                        {/* Tags */}
                        <div className="post-tags">
                            <div className="widget-header">
                                <div className="header-icon">
                                    <i className="fa-solid fa-tag"></i>
                                </div>
                                <h3>الوسوم</h3>
                            </div>
                            <div className="tags-list">
                                {post.tags.map((tag) => (
                                    <span key={tag}>
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Share */}
                        <div className="post-share">
                            <div className="widget-header">
                                <div className="header-icon">
                                    <i className="fa-solid fa-share-nodes"></i>
                                </div>
                                <h3>شارك المقال</h3>
                            </div>
                            <div className="share-buttons">
                                <button><i className="fa-solid fa-link"></i></button>
                                <button><i className="fa-brands fa-whatsapp"></i></button>
                                <button><i className="fa-brands fa-linkedin-in"></i></button>
                                <button><i className="fa-brands fa-x-twitter"></i></button>
                            </div>
                        </div>

                        {/* Author */}
                        <div className="post-author">

                                <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                />

                                <div className="post-author-content">

                                    <span className="author-label">
                                        كاتب المقال
                                    </span>

                                    <h3>{post.author.name}</h3>

                                    <p className="author-role">
                                        {post.author.role}
                                    </p>

                                    <p className="author-description">
                                        مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                                    </p>

                                </div>

                        </div>
                    </main>

                </div>
            </div>
        </section>
    );
}