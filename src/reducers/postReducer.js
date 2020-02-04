export default (state = [], action) => {
    
    switch (action.type){
        case 'Fetch_Posts':
        return action.payload;
      default:
      return state;  
    }
};