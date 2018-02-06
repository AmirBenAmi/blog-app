import database from 'firebase';
import uuid from 'uuid';

//ADD POST
export const addPost = ({title = 'title', note = '', createdAt = 0} = {}) => ({
    type: 'ADD_POST',
    post: {
        id: uuid(),
        title,
        note,
        createdAt
    }
});
//SET POST
export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = () => {
    return (dispatch) => {
        const posts = [{id: '1', title:'testTitle', note:'this is the first note of many', createdAt: 0}];
        dispatch(setPosts(posts));
    }
};
//EDIT POST
export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates  
});

export const startEditPost = (id, updates) => {
    return (dispatch, getState) => {
        return dispatch(editPost(id, updates))
    }
}





// export const  startAddPost = () => {
//     return (dispatch) => {
//         const {
//             title = '',
//             note = '',
//             createdAt = 0
//         }
//     }
// };