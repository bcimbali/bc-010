import {
  UPDATE_SYNTH_ENVELOPE,
  UPDATE_FILTER_ENVELOPE,
  UPDATE_ALL_SYNTH_ENVELOPES,
} from './actions';

const initialSynthState = {
  attack: 0.0001,
  decay: 0.2,
  sustain: 0.2,
  release: 1,
};

const initialFilterState = {
  frequency: 0,
  type: 'sine',
  depth: 1,
  baseFrequency: 500,
  octaves: 2.6,
  filter: {
    type: 'lowpass',
    rolloff: -12,
    Q: 1,
  },
};

export function synthEnvelopeReducer(state = initialSynthState, action) {
  const { type, envelopeName, envelopeValue, envelopeObj } = action;
  switch (type) {
    case UPDATE_SYNTH_ENVELOPE:
      return {
        ...state,
        [envelopeName]: envelopeValue,
      };
    case UPDATE_ALL_SYNTH_ENVELOPES:
      return {
        ...state,
        attack: envelopeObj.attack,
        decay: envelopeObj.decay,
        sustain: envelopeObj.sustain,
        release: envelopeObj.release,
      };
    default:
      return state;
  }
}

export function filterParamsReducer(state = initialFilterState, action) {
  const { type, envelopeName, envelopeValue } = action;
  switch (type) {
    case UPDATE_FILTER_ENVELOPE: {
      return {
        ...state,
        [envelopeName]: envelopeValue,
      };
    }
    default:
      return state;
  }
}
