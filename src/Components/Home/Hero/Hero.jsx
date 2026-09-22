import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="home-hero" dir="rtl">

            {/* Background */}
            <div className="home-hero-grid"></div>
            <div className="home-hero-glow"></div>

            <div className="container position-relative">

                <div className="home-hero-content text-center">

                    {/* Badge */}
                    <div className="home-hero-badge">
                        <span className="badge-dot"></span>
                        <span className="badge-pulse"></span>

                        <span>
                            مرحباً بك في عدسة
                        </span>
                    </div>


                    {/* Title */}
                    <h1 className="home-hero-title">
                        اكتشف <span>فن</span>
                        <br />
                        التصوير الفوتوغرافي
                    </h1>


                    {/* Description */}
                    <p className="home-hero-description">
                        انغمس في أسرار المحترفين ونصائح عملية
                        لتطوير مهاراتك في التصوير.
                    </p>


                    {/* Buttons */}
                    <div className="home-hero-buttons">

                        <NavLink
                            to="/Blog"
                            className="home-primary-btn"
                        >
                            <span>استكشف المقالات</span>
                            <i className="fa-solid fa-arrow-left"></i>
                        </NavLink>

                        <NavLink
                            to="/Who"
                            className="home-secondary-btn"
                        >
                            <i className="fa-solid fa-circle-info"></i>
                            <span>اعرف المزيد</span>
                        </NavLink>

                    </div>


                    {/* Statistics */}
                    <div className="row g-3 home-stats">

                        <div className="col-6 col-md-3">
                            <div className="home-stat-card">
                                <i className="fa-regular fa-newspaper"></i>

                                <strong>+50</strong>

                                <span>مقالة</span>
                            </div>
                        </div>

                        <div className="col-6 col-md-3">
                            <div className="home-stat-card">
                                <i className="fa-solid fa-users"></i>

                                <strong>+10ألف</strong>

                                <span>قارئ</span>
                            </div>
                        </div>

                        <div className="col-6 col-md-3">
                            <div className="home-stat-card">
                                <i className="fa-regular fa-folder-open"></i>

                                <strong>4</strong>

                                <span>تصنيفات</span>
                            </div>
                        </div>

                        <div className="col-6 col-md-3">
                            <div className="home-stat-card">
                                <i className="fa-solid fa-pen-nib"></i>

                                <strong>6</strong>

                                <span>كاتب</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}