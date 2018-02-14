import  React from 'react';
import { connect } from 'react-redux';
import PostListItem from './PostListItem';
import selectPosts from '../selectors/getvisible';

export const PostList = (props) => (
                <div>
                {  props.posts.length === 0 ? (
                    <p> No Posts</p>
                    ) : (
                        props.posts.map((post) => {
                        return  <PostListItem key={post.id} {...post} />
                    })
                    )
                }
            </div>
);

const mapStateToProps = (state) => {
    return {
        posts: selectPosts(state.posts, state.filters)
    };
};

export default connect(mapStateToProps)(PostList);