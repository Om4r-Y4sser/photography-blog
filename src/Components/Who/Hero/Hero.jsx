import React from "react";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="who-hero" dir="rtl">

            {/* Grid Background */}
            <div className="who-hero-grid"></div>

            {/* Glow */}
            <div className="who-hero-glow"></div>

            <div className="container position-relative">

                <div className="who-hero-content">

                    {/* Badge */}
                    <div className="who-hero-badge">

                        <span className="who-badge-dot"></span>

                        <span className="who-badge-pulse"></span>

                        <i className="fa-regular fa-newspaper"></i>

                        <span>
                            مدونتنا
                        </span>

                    </div>


                    {/* Title */}
                    <h1 className="who-hero-title">

                        الإعلام والإلهام
                        <span> مهمتنا هي</span>

                    </h1>


                    {/* Description */}
                    <p className="who-hero-description">

                        مدونة متخصصة في فن التصوير الفوتوغرافي،
                        نشارك معكم أسرار المحترفين ونصائح عملية
                        لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة
                        ومساعدة المصورين على تنمية مهاراتهم من خلال
                        محتوى عالي الجودة.

                    </p>


                    {/* Statistics */}
                    <div className="row g-3 who-stats">

                        {/* Articles */}
                        <div className="col-6 col-md-3">
                            <div className="who-stat-card">

                                <i className="fa-regular fa-newspaper"></i>

                                <strong>+500</strong>

                                <span>
                                    مقالة منشورة
                                </span>

                            </div>
                        </div>


                        {/* Readers */}
                        <div className="col-6 col-md-3">
                            <div className="who-stat-card">

                                <i className="fa-solid fa-users"></i>

                                <strong>+2مليون</strong>

                                <span>
                                    قارئ شهرياً
                                </span>

                            </div>
                        </div>


                        {/* Categories */}
                        <div className="col-6 col-md-3">
                            <div className="who-stat-card">

                                <i className="fa-regular fa-folder-open"></i>

                                <strong>+15</strong>

                                <span>
                                    تصنيف
                                </span>

                            </div>
                        </div>


                        {/* Authors */}
                        <div className="col-6 col-md-3">
                            <div className="who-stat-card">

                                <i className="fa-solid fa-pen-nib"></i>

                                <strong>+50</strong>

                                <span>
                                    كاتب خبير
                                </span>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}