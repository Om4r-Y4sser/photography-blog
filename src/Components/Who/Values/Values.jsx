import React from "react";
import "./Values.css";

const values = [
    {
        id: 1,
        title: "الجودة أولاً",
        description: "محتوى مدروس ومكتوب بخبرة",
        icon: "fa-bullseye"
    },
    {
        id: 2,
        title: "تركيز عملي",
        description: "أمثلة واقعية يمكنك تطبيقها اليوم",
        icon: "fa-bolt"
    },
    {
        id: 3,
        title: "المجتمع",
        description: "تعلم مع آلاف المصورين",
        icon: "fa-users"
    },
    {
        id: 4,
        title: "دائماً محدث",
        description: "أحدث الاتجاهات وأفضل الممارسات",
        icon: "fa-arrows-rotate"
    }
];

export default function Values() {

    return (
        <section className="values-section" dir="rtl">

            <div className="container">

                {/* Title */}
                <h2 className="values-title">

                    <span>|</span>

                    قيمنا

                    <span>|</span>

                </h2>


                {/* Subtitle */}
                <p className="values-description">
                    المبادئ التي توجه كل ما نقوم بإنشائه
                </p>


                {/* Cards */}
                <div className="row g-3">

                    {values.map((item) => (

                        <div
                            className="col-12 col-sm-6 col-lg-3"
                            key={item.id}
                        >

                            <div className="value-card">

                                {/* Icon */}
                                <div className="value-icon">

                                    <i
                                        className={`fa-solid ${item.icon}`}
                                    ></i>

                                </div>


                                {/* Title */}
                                <h3>
                                    {item.title}
                                </h3>


                                {/* Description */}
                                <p>
                                    {item.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}