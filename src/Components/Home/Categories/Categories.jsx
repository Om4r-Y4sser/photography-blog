import React from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";

const categories = [
    {
        id: "lighting",
        name: "إضاءة",
        count: "مقالات",
        icon: "fa-sun"
    },
    {
        id: "portrait",
        name: "بورتريه",
        count: "مقالات",
        icon: "fa-user"
    },
    {
        id: "landscapes",
        name: "مناظر طبيعية",
        count: "مقالات",
        icon: "fa-mountain"
    },
    {
        id: "technology",
        name: "تقنيات",
        count: "مقالات",
        icon: "fa-sliders"
    },
    {
        id: "equipment",
        name: "معدات",
        count: "مقالات",
        icon: "fa-camera"
    }
];

export default function Categories() {

    return (
        <section className="categories-section" dir="rtl">

            <div className="container">

                <div className="categories-heading text-center">

                    <h2>
                        استكشف حسب الموضوع
                    </h2>

                    <p>
                        اعثر على محتوى مصمم حسب اهتماماتك
                    </p>

                </div>


                <div className="row g-3">

                    {categories.map((category) => (

                        <div
                            className="col-12 col-sm-6 col-md-4 col-lg"
                            key={category.id}
                        >

                            <NavLink
                                to={`/Blog?category=${encodeURIComponent(category.name)}`}
                                className="category-card"
                            >

                                {/* Arrow */}
                                <div className="category-arrow">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </div>


                                {/* Icon */}
                                <div className="category-icon">
                                    <i
                                        className={`fa-solid ${category.icon}`}
                                    ></i>
                                </div>


                                {/* Content */}
                                <div className="category-content">

                                    <h3>
                                        {category.name}
                                    </h3>

                                    <span>
                                        {category.count}
                                    </span>

                                </div>

                            </NavLink>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}