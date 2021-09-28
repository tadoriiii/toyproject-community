const initialState = {
  product: [],
  likes: [],
};

const GET_INFORMATION = "GET_INFORMATION";
const GET_LIKE_PRODUCT = "GET_LIKE_PRODUCT";

export const getInformation = (product) => ({
  type: GET_INFORMATION,
  product,
});

export const getLikeProduct = (likes) => ({
  type: GET_LIKE_PRODUCT,
  likes,
});

export function Product(state = initialState, action) {
  switch (action.type) {
    case GET_INFORMATION:
      return {
        ...state,
        product: state.product.concat(action.product),
      };
    case GET_LIKE_PRODUCT:
      return {
        ...state,
        likes: state.likes.concat(action.likes),
      };
    default:
      return { ...state };
  }
}
