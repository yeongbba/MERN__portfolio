import { INCREASE_PAGE, DECREASE_PAGE, GO_FIRST_PAGE } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case INCREASE_PAGE:
      return { ...state, page: action.page };
    case DECREASE_PAGE:
      return { ...state, page: action.page };
    case GO_FIRST_PAGE:
      return { ...state, page: action.page };
    default:
      return state;
  }
}
