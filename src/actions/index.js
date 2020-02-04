import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder'

/*export const fetchPosts =  () => {
    //make a request to api 
    return async function(dispatch,getState) {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'Fetch_Posts', payload:response})
};
};*/

//reactoring above

export const fetchPostsAndUsers =  () =>  async (dispatch,getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts,'userId'));
    console.log(userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts =  () =>  async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'Fetch_Posts', payload:response.data})
};

export const fetchUser =  (id) =>  async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'Fetch_User', payload:response.data})
};
