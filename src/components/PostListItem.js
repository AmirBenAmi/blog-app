import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const PostListItem = ({title, createdAt, id}) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>{title}</h3>
        <span >{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </ Link>
    </div>
);

export default PostListItem;