import { CHANGE_PRESET, TOGGLE_SIDENAV } from './actions';

const initialPresetState = {
  name: 'init',
};

const initialSideNavState = {
  isSideNavOpen: false,
};

export function sideNavReducer(state = initialSideNavState, action) {
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

export function presetReducer(state = initialPresetState, action) {
  const { type, presetName } = action;
  switch (type) {
    case CHANGE_PRESET:
      return {
        ...state,
        name: presetName,
      };
    default:
      return state;
  }
}
