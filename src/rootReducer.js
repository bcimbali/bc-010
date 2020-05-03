import { combineReducers } from 'redux';
import octave from './components/OctaveContainer/reducer';
import oscillator from './components/OscillatorBtn/reducer';
import {
  synthEnvelopeReducer as envelope,
  filterParamsReducer as filterParams,
} from './components/VerticalSlider/reducer';
import sideNav from './components/SideNav/reducer';

const synthesizer = combineReducers({
  oscillator,
  envelope,
});

const rootReducer = combineReducers({
  octave,
  synthesizer,
  filterParams,
  sideNav,
});

export default rootReducer;
