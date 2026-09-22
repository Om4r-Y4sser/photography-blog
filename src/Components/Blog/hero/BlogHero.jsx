import React from "react";
import "./BlogHero.css";

export default function BlogHero() {
    return (
        <section className="blog-hero d-flex flex-column">

            <div className="hero-content p-4">
                <div className="d-flex desc m-auto rounded-pill justify-content-center align-items-center mb-3 mt-5">
                  <p className=" my-0 fw-bold">مدونتنا</p>
                  <i class="fa-solid fa-newspaper"></i>
                  <div className="blinker"></div>
                </div>
                <h1 className=" mb-3" >استكشف <span className=" orange-text">مقالاتنا</span></h1>
                <h2 className=" fs-5 text-secondary mb-5">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</h2>
            </div>

        </section>
    );
}