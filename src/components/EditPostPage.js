import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from '../actions/posts';

class EditPostPage extends React.Component{
    constructor(props){
        super(props);
        this.onRemove = this.onRemove.bind(this);
    }
    onSubmit = (post) => {
        this.props.startEditPost(this.props.post.id, post);
        this.props.history.push('/');
      };
    onRemove(){
        this.props.startRemovePost(this.props.post.id);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
            <PostForm
                post={this.props.post} 
                onSubmit={this.onSubmit}
            /> 
            <button onClick={this.onRemove}>Remove Expense</button>
            </div>
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
    startEditPost: (id, post) => dispatch(startEditPost(id, post)),
    startRemovePost: (id) => dispatch(startRemovePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
