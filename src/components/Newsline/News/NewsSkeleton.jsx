import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function NewsSkeleton() {
  return (
    <div className="card">
      <div className="image">
        <Skeleton height={150} width={300} />
      </div>
      <div className="content">
        <span className="title">
          <Skeleton />
        </span>
        <p className="desc">
          <Skeleton count={3} />
        </p>
      </div>
    </div>
  );
}

export default NewsSkeleton;
