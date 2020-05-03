import { TOGGLE_SIDENAV } from './actions';

const initialState = {
  isSideNavOpen: false,
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_SIDENAV:
      return {
        ...state,
        isSideNavOpen: !state.isSideNavOpen,
      };
    default:
      return state;
  }
}
