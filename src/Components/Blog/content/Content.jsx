import React, { useState } from "react";
import PostCard from "./PostCard";
import { useSearchParams } from "react-router-dom";
import "./Content.css"

export default function Content({ posts }) {

    const [view, setView] = useState('grid');
const [currentPage, setCurrentPage] = useState(1);
const [search, setSearch] = useState('');

const [searchParams, setSearchParams] = useSearchParams();

const categoryFromUrl = searchParams.get('category');

const [category, setCategory] = useState(
    categoryFromUrl || 'جميع المقالات'
);

    const categories = [
        'جميع المقالات',
        'إضاءة',
        'بورتريه',
        'مناظر طبيعية',
        'تقنيات',
        'معدات'
    ];

    const postsPerPage = 6;

    const filteredPosts = posts.filter((post) => {
        const matchesSearch = post.title.includes(search);
        const matchesCategory = category === 'جميع المقالات' || post.category === category;
        return matchesSearch && matchesCategory;
    });

    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const hasActiveFilters = search !== '' || category !== 'جميع المقالات';

    const clearFilters = () => {
        setSearch('');
        setCategory('جميع المقالات');
        setCurrentPage(1);
    };

    return (
        <>
            <div className="filter-bar container d-flex justify-content-between flex-row-reverse align-items-center flex-wrap gap-3 sticky-top bg-black">
                <div className="search-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                        placeholder="ابحث في المقالات..."
                    />
                </div>

                <div className="category-pills d-flex flex-wrap gap-2">
                    {categories.map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                setCategory(item);
                                setCurrentPage(1);
                            }}
                            className={`category-pill ${category === item ? 'active' : ''}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container d-flex justify-content-between flex-row-reverse align-items-center flex-wrap gap-3 mt-4">
                <div>
                    <p className="text-secondary fs-5 m-0">
                        عرض <span className="text-white fw-bolder">{filteredPosts.length}</span>{' '}
                        {category === 'جميع المقالات' ? (
                            'مقالة'
                        ) : (
                            <>مقالات في <span className="category-highlight">{category}</span></>
                        )}
                    </p>
                </div>

                <div className="d-flex align-items-center gap-3">
                    {hasActiveFilters && (
                        <button className="clear-filters" onClick={clearFilters}>
                            <i className="fa-solid fa-xmark"></i>
                            مسح الفلاتر
                        </button>
                    )}

                    <div className="d-flex list-grid-toggle justify-content-center align-items-center">
                        <button
                            type="button"
                            className={`grid-view fs-4 border-0 rounded-2 ${view === 'grid' ? 'active' : ''}`}
                            onClick={() => setView('grid')}
                        >
                            <i className="fa-solid fa-table-cells-large"></i>
                        </button>

                        <button
                            type="button"
                            className={`list-view fs-4 border-0 rounded-2 ${view === 'list' ? 'active' : ''}`}
                            onClick={() => setView('list')}
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container py-4">
                {currentPosts.length === 0 ? (
                    <p className="no-results text-secondary text-center py-5">لا توجد مقالات تطابق بحثك</p>
                ) : view === 'grid' ? (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {currentPosts.map((post) => (
                            <div className="col" key={post.id}>
                                <PostCard {...post} view="grid" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-3">
                        {currentPosts.map((post) => (
                            <PostCard key={post.id} {...post} view="list" />
                        ))}
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <>
                    <div className="d-flex justify-content-center align-items-center gap-2 mt-4 pagination-wrapper">
                        <button
                            className="page-arrow"
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>

                        {Array.from({ length: totalPages }, (_, index) => totalPages - index).map((page) => (
                            <button
                                key={page}
                                className={`page-btn ${currentPage === page ? 'active' : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            className="page-arrow"
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>

                    <p className="page-info text-secondary text-center mt-2 mb-5">
                        صفحة {currentPage} من {totalPages}
                    </p>
                </>
            )}
        </>
    );
}