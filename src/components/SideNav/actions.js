export const TOGGLE_SIDENAV = 'TOGGLE_SIDENAV';
export const CHANGE_PRESET = 'CHANGE_PRESET';

export function toggleSidenav() {
  return {
    type: 'TOGGLE_SIDENAV',
  };
}

export function changePreset(presetName) {
  return {
    type: 'CHANGE_PRESET',
    presetName,
  };
}
