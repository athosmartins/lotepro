import React from 'react';

const Blog = () => {
  const posts = [
    { id: 1, title: 'Tendências do Mercado Imobiliário em BH', date: '10/10/2024', excerpt: 'Descubra as últimas tendências...' },
    { id: 2, title: 'Novas Regras para Construções', date: '15/09/2024', excerpt: 'Mudanças importantes nas normas...' },
    // Add more posts here
  ];

  return (
    <div className="blog">
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
