import database from '../firebase/firebase';
import uuid from 'uuid';

//ADD POST
export const addPost = ({title = 'title', note = '', createdAt = 0, id = '0'} = {}) => ({
    type: 'ADD_POST',
    post: {
        id,
        title,
        note,
        createdAt
    }
});
export const startAddPost = (postData = {}) => {
    // database.ref().push('hey2');
     return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            title = 'title', 
            note = '', 
            createdAt = 0
        } = postData;
        const post = {title, note, createdAt};
        return database.ref(`users/${uid}/posts`).push(post).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                ...post
            }));
        }).catch((e) => console.log(e));
    };
};

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