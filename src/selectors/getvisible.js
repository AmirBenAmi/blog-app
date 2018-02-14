//Get visible expenses

export default (posts, { sortBy, text}) => {
const postsFilterd =  posts.filter((post) => {
    const textMatch = post.title.toLowerCase().includes(text.toLowerCase());
    return textMatch;
});
    return postsFilterd.sort((a, b) => {
        if(sortBy === 'title'){
            return a.title < b.title ? -1 : 1;
        } else if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1 ;
        }
    });
};