import React from 'react'
import { NavLink } from 'react-router-dom'
import './PostCard.css'

export default function PostCard({ slug, title, image, excerpt, category, date, readTime, author, view = 'grid' }) {
  const formattedDate = new Date(date).toLocaleDateString('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  if (view === 'list') {
    return (
      <div className="post-card-list">
        <div className="post-card-list-content">
          <div className="post-card-list-meta">
            <span className="post-card-list-readtime">
              <i className="fa-regular fa-clock"></i>
              {readTime}
            </span>
            <span className="post-card-list-date">
              <i className="fa-regular fa-calendar"></i>
              {formattedDate}
            </span>
            <span className="post-card-list-badge">{category}</span>
          </div>

          <h2 className="post-card-list-title">{title}</h2>

          <p className="post-card-list-excerpt">{excerpt}</p>

          <div className="post-card-list-footer">
            <NavLink to={`/blog/${slug}`} className="post-card-list-link">
              <i className="fa-solid fa-arrow-left my-0"></i>
              <p>اقرأ المقال</p>
            </NavLink>

            <div className="post-card-author">
              <div className="text-end">
                <p className="post-card-author-name">{author.name}</p>
                <p className="post-card-author-role">{author.role}</p>
              </div>
              <img className="post-card-author-avatar" src={author.avatar} alt={author.name} />
            </div>
          </div>
        </div>

        <div className="post-card-list-image-wrap">
          <img className="post-card-list-image" src={image} alt={title} />
        </div>
      </div>
    );
  }

  return (
    <div className="post-card">
      <div className="post-card-image-wrap">
        <img className="post-card-image" src={image} alt={title} />
        <span className="post-card-badge">{category}</span>
      </div>

      <div className="post-card-body">
        <div className="post-card-meta">
          <i className="fa-regular fa-clock"></i>
          <span>{formattedDate}</span>
          <span className="post-card-dot">•</span>
          <span>{readTime}</span>
        </div>

        <h2 className="post-card-title">{title}</h2>

        <p className="post-card-excerpt">{excerpt}</p>

        <div className="post-card-footer">
          <NavLink to={`/blog/${slug}`} className="post-card-arrow">
            <i className="fa-solid fa-chevron-left"></i>
          </NavLink>

          <div className="post-card-author">
            <div className="text-end">
              <p className="post-card-author-name">{author.name}</p>
              <p className="post-card-author-role">{author.role}</p>
            </div>
            <img className="post-card-author-avatar" src={author.avatar} alt={author.name} />
          </div>
        </div>
      </div>
    </div>
  );
}