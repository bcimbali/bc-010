export const UPDATE_ENVELOPE = "UPDATE_ENVELOPE";
export const UPDATE_FILTER_ENVELOPE = "UPDATE_FILTER_ENVELOPE";

// TODO: pass in another argument to tell this what slider bank to update
export function updateEnvelope(envelopeName, envelopeValue) {
  return {
    type: "UPDATE_ENVELOPE",
    envelopeName,
    envelopeValue,
  };
}

export function updateFilterEnvelope(
  envelopeName,
  envelopeValue,
  typeOfParams,
) {
  return {
    type: "UPDATE_FILTER_ENVELOPE",
    envelopeName,
    envelopeValue,
    typeOfParams,
  };
}
