import React from 'react';


export const PostListFilters = () => (
    <div>
        <input type="text" />
        <select >
             <option value="by title">By Title</option>
            <option value="by date">By Date</option>
            </select>
        <button> add </button>
    </div>
);

export default PostListFilters;