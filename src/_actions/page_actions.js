import { INCREASE_PAGE, DECREASE_PAGE, GO_FIRST_PAGE } from "./types";

export function increasePage(page) {
  page = page + 1;

  return {
    type: INCREASE_PAGE,
    page: page,
  };
}

export function decreasePage(page) {
  page = page - 1;

  return {
    type: DECREASE_PAGE,
    page: page,
  };
}

export function goFirstPage() {
  const page = 1;

  return {
    type: DECREASE_PAGE,
    page: page,
  };
}
