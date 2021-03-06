// Reducer for elements
const elements = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.data
    
    case "EDIT_USER":
      // I used the email because the api sometimes doesn't return a valid id.
      const indexLocated = state.findIndex(item => item.email === action.identifier);
      // this could also be done with inmutables but i try to do it by my own without Libs as requested.
      return state.map((item, index) => {
        // Find the item with the matching id
        if(index === indexLocated) {
          // Return a new object
          return {
            ...item,  // copy the existing item
            name: { title: item.name.title, first: action.newValues.first, last: action.newValues.last},
            email: action.newValues.email,
            phone: action.newValues.phone,
            location: {city: action.newValues.city, state: action.newValues.state, country: item.location.country, postcode: item.location.postcode}
          }
        }    
        // Leave every other items unchanged
        return item;
      });
    case "ERROR":
      return { ...state, error: action.msg }
    case 'SORT_LIST':
      // Simple sorting by last Name that impacts in the store.
      return state.slice().sort(function(a, b) {
        var nameA = a.name.last.toLowerCase(),
          nameB = b.name.last.toLowerCase()
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
      
    default:
      return state;

  }
};

export default elements;
