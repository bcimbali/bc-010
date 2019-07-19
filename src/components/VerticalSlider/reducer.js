import { UPDATE_ENVELOPE, UPDATE_FILTER_ENVELOPE } from "./actions";

const initialState = {
  attack: 0.0001,
  decay: 0.2,
  sustain: 0.2,
  release: 1,
  portamento: 0.05,
};

const initialFilterState = {
  frequency: 0,
  type: "sine",
  depth: 1,
  baseFrequency: 500,
  octaves: 2.6,
  filter: {
    type: "lowpass",
    rolloff: -12,
    Q: 1,
  },
};

export function envelope(state = initialState, action) {
  const { type, envelopeName, envelopeValue } = action;
  switch (type) {
    case UPDATE_ENVELOPE:
      return {
        ...state,
        [envelopeName]: envelopeValue,
      };
    default:
      return state;
  }
}

export function filterParams(state = initialFilterState, action) {
  const { type, envelopeName, envelopeValue } = action;
  switch (type) {
    case UPDATE_FILTER_ENVELOPE: {
      console.log("IN UPDATE_FILTER_ENVELOPE");
      return {
        ...state,
        [envelopeName]: envelopeValue,
      };
    }
    default:
      return state;
  }
}
