import React from 'react';
import { Link } from 'react-ruoter-dom';

export const PostListItem = () => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>Title</h3>
    </ Link>
    </div>
);

export default PostListItem;