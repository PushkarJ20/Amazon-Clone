export const initialState = {
  basket: [
    {
      id: "1",
      title:
        "PAPER PLANE DESIGN Birds Painting For Wall Set of 4 Brown Framed Art (BIRDS)",
      price: 329,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71AR2MFv3IL._SL1500_.jpg",
    },
  ],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
}

export default reducer;
