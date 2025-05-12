
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, excerpt, imageUrl, date, category, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/blog/${slug}`} className="block">
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl || "/images/blog-default.jpg"} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{date}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{category}</span>
        </div>
        <Link to={`/blog/${slug}`} className="block">
          <h3 className="text-xl font-bold mb-2 hover:text-brand-blue transition-colors">{title}</h3>
        </Link>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`} 
          className="text-brand-blue font-medium hover:text-brand-lightBlue transition-colors inline-flex items-center"
        >
          Leggi di più
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
