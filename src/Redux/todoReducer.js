const initdata = {
  todo: "",
  count: 0,
};

const todoReducer = (store = initdata, action) => {
  switch (action.type) {
    case "TODO":
      return {
        ...store,
        todo: action.payload,
      };
    case "INC":
      return {
        ...store,
         count: store.count + action.payload
      };
    case "DESC":
      return {
         ...store,
         count: store.count - action.payload
      };

    default:
      return store;
  }
};

export default todoReducer;
