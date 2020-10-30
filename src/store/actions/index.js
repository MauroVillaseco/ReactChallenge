// Sort Action
export const sortList = array => ({
  type: "SORT_LIST",
  array
});

// Edit Action
export const editElement = (newValues, identifier) => ({
  type: "EDIT_USER",
  newValues,
  identifier
});

// asynchronous action creator
export const fetchData = () => {
  return (dispatch) => {
      return fetch('https://randomuser.me/api/?results=5')
          .then(response => response.json())
          .then(json => dispatch(
              { type: "FETCH_DATA", data: json.results }))
          .catch(err => dispatch(
              { type: "ERROR",msg: "Unable to fetch data" }))
  }
};