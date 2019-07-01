export const TOGGLE_OSCILLATORS = "TOGGLE_OSCILLATORS";
export const UPDATE_ENVELOPE = "UPDATE_ENVELOPE";

export function toggleOscillators(oscType) {
  return {
    type: "TOGGLE_OSCILLATORS",
    oscType,
  };
}

export function updateEnvelope(envelopeName, envelopeValue) {
  return {
    type: "UPDATE_ENVELOPE",
    envelopeName,
    envelopeValue,
  };
}
