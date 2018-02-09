import database from '../firebase/firebase';
import uuid from 'uuid';

//ADD POST
export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});
export const startAddPost = (postData = {}) => {

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

return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/posts`).once('value').then((snapshot) => {
        const posts = [];
        snapshot.forEach((childSnapShot) => {
            posts.push({
                id: childSnapShot.key,
                ...childSnapShot.val()
            });
        });
        dispatch(setPosts(posts));
    });
};

    // return (dispatch) => {
    //     const posts = [{id: '1', title:'testTitle', note:'this is the first note of many', createdAt: 0}];
    //     dispatch(setPosts(posts));
    // }
};
//EDIT POST
export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates  
});

export const startEditPost = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts/${id}`).update(updates).then(()=> {
            dispatch(editPost(id, updates));
        });
    }
};

export const removePost = (id) => ({
    type: 'REMOVE_POST',
    id
});

export const startRemovePost = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts/${id}`).remove().then(() => {
            dispatch(removePost(id));
        });
    };
};