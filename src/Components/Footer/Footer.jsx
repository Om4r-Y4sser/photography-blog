import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Subscribed email:", email);

        setEmail("");
    };

    return (
        <footer className="footer">

            {/* Main Footer */}
            <div className="container">

                <div className="row footer-content">

                    {/* Brand */}
                    <div className="col-lg-3 col-md-6 footer-brand">

                        <div className="footer-logo">
                            <span>ع</span>
                            <h2>عدسة</h2>
                        </div>

                        <p>
                            مدونة متخصصة في فن التصوير الفوتوغرافي.
                            نشارك معكم أسرار المحترفين ونصائح عملية
                            لتطوير مهاراتكم.
                        </p>

                        {/* Social Links */}
                        <div className="footer-socials">

                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="YouTube"
                            >
                                <i className="fa-brands fa-youtube"></i>
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>

                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="X"
                            >
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>

                        </div>

                    </div>


                    {/* Explore */}
                    <div className="col-lg-2 col-md-6 footer-column">

                        <h3>
                            استكشف
                            <span></span>
                        </h3>

                        <div className="footer-links">

                          <NavLink to="/">
                              <span>الرئيسية</span>
                              <i className="fa-solid fa-chevron-left"></i>
                          </NavLink>

                          <NavLink to="/Blog">
                              <span>المدونة</span>
                              <i className="fa-solid fa-chevron-left"></i>
                          </NavLink>

                          <NavLink to="/Who">
                              <span>من نحن</span>
                              <i className="fa-solid fa-chevron-left"></i>
                          </NavLink>

                      </div>

                    </div>


                    {/* Categories */}
                    <div className="col-lg-2 col-md-6 footer-column">

                        <h3>
                            التصنيفات
                            <span></span>
                        </h3>

                        <div className="footer-links">

                          <NavLink to="/Blog?category=إضاءة">
                              <span>إضاءة</span>
                              <i className="fa-solid fa-chevron-left"></i>
                          </NavLink>

                          <NavLink to="/Blog?category=بورتريه">
                              <span>بورتريه</span>
                              <i className="fa-solid fa-chevron-left"></i>
                          </NavLink>

                          <NavLink to="/Blog?category=مناظر طبيعية">
                              <span>مناظر طبيعية</span>
                              <i className="fa-solid fa-chevron-left"></i>
                          </NavLink>

                          <NavLink to="/Blog?category=تقنيات">
                              <span>تقنيات</span>
                              <i className="fa-solid fa-chevron-left"></i>
                          </NavLink>

                      </div>

                    </div>


                    {/* Newsletter */}
                    <div className="col-lg-3 col-md-6 footer-newsletter">

                        <h3>
                            ابقَ على اطلاع
                            <span></span>
                        </h3>

                        <p>
                            اشترك ليصلك أحدث المقالات
                            والتحديثات.
                        </p>

                        <form onSubmit={handleSubmit}>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="أدخل بريدك الإلكتروني"
                                required
                            />

                            <button type="submit">
                                اشترك
                            </button>

                        </form>

                    </div>

                </div>

            </div>


            {/* Bottom Footer */}
            <div className="footer-bottom">

                <div className="container d-flex justify-content-between align-items-center">

                    <p>
                        © 2026 عدسة. صنع بكل 🧡 جميع الحقوق محفوظة.
                    </p>

                    <div className="footer-bottom-links">

                        <NavLink to="/privacy">
                            سياسة الخصوصية
                        </NavLink>

                        <NavLink to="/terms">
                            شروط الخدمة
                        </NavLink>

                    </div>

                </div>

            </div>

        </footer>
    );
}