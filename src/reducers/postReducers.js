export const postState = [];

export const postReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload;
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);
    case "EDIT_POST":
      return state.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    default:
      return state;
  }
}