import { types } from "../types/types";
/* Reducer es una función */
// const state = {
//   name: "Alejandro",
//   logged: true,
// };

export const authReducer = (state = {}, actionModifier) => {
  switch (actionModifier.type) {
    case types.login:
      return {
        ...actionModifier.payload,
        logged: true,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
