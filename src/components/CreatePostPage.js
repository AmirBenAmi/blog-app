import React from 'react';
import { connect } from 'react-redux';
import { PostForm } from './PostForm';
import {addPost} from '../actions/posts';



class CreatePostPage extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(post) {
        this.props.addPost(post);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <PostForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    addPost: (post) => dispatch(addPost(post))
});


export default connect(undefined, mapDispatchToProps)(CreatePostPage);