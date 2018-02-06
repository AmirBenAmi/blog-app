import  React from 'react';
import { connect } from 'react-redux';
import PostListItem from './PostListItem';

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
        posts: state.posts
    };
};

export default connect(mapStateToProps)(PostList);