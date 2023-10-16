import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { INC, DESC } from '../Redux/actionTypes';
import { INCCreator, DESCCreator } from "../Redux/actionCreater";
function Counter(props) {
  let dispatch = useDispatch();

  let { count } = useSelector((store) => {
    return store;
  });
  return (
    <div>
      <h2>Count Value: {count}</h2>
      <button
        onClick={() => {
        //   dispatch({ type: INC, payload: 5 });
          dispatch(INCCreator(5));
        }}
      >
        INC
      </button>
      <button
        onClick={() => {
        //   dispatch({ type: DESC, payload: 5 });
          dispatch(DESCCreator(5));
        }}
      >
        DESC
      </button>
    </div>
  );
}

export default Counter;
