export default (state = [], action) => {
    
    switch (action.type){
        case 'Fetch_User':
        return [...state,action.payload];
      default:
      return state;  
    }
};