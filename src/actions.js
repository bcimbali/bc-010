export const TOGGLE_OSCILLATORS = "TOGGLE_OSCILLATORS";
export const UPDATE_ENVELOPE = "UPDATE_ENVELOPE";

export function toggleOscillators(oscType) {
  return {
    type: "TOGGLE_OSCILLATORS",
    oscType,
  };
}

// TODO: pass in another argument to tell this what slider bank to update
export function updateEnvelope(envelopeName, envelopeValue, typeOfParams) {
  return {
    type: "UPDATE_ENVELOPE",
    envelopeName,
    envelopeValue,
    typeOfParams,
  };
}
