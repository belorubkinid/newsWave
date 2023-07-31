/* eslint-disable react/prop-types */
import React from 'react';

function News({ imageURL, title, description }) {
  return (
    <div className="card">
      <div className="image" style={{ backgroundImage: `url(${imageURL})` }} />
      <div className="content">
        <span className="title">
          {title}
        </span>
        <p className="desc">
          {description}
        </p>
      </div>
    </div>
  );
}

export default News;
