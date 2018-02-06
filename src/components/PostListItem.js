import React from 'react';
import { Link } from 'react-router-dom';

export const PostListItem = ({title, id}) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>{title}</h3>
    </ Link>
    </div>
);

export default PostListItem;