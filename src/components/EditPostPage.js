import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startEditPost } from '../actions/posts';

class EditPostPage extends React.Component{
    constructor(props){
        super(props);
    }
    onSubmit = (post) => {
        this.props.startEditPost(this.props.post.id, post);
        this.props.history.push('/');
      };

    render(){
        return (
            <PostForm
                post={this.props.post} 
                onSubmit={this.onSubmit}
            /> 
        );
    }
};

// const EditPostPage = (props) => (
//     <div>
//         <h3>{props.match.params.id}</h3>
//         <h1>{props.post.note}</h1>
//     </div>
// );

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditPost: (id, post) => dispatch(startEditPost(id, post))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
