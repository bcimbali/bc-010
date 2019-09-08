export const UPDATE_SYNTH_ENVELOPE = 'UPDATE_SYNTH_ENVELOPE';
export const UPDATE_FILTER_ENVELOPE = 'UPDATE_FILTER_ENVELOPE';

// TODO: pass in another argument to tell this what slider bank to update
export function updateSynthEnvelope(envelopeName, envelopeValue) {
  return {
    type: 'UPDATE_SYNTH_ENVELOPE',
    envelopeName,
    envelopeValue,
  };
}

export function updateFilterEnvelope(envelopeName, envelopeValue) {
  return {
    type: 'UPDATE_FILTER_ENVELOPE',
    envelopeName,
    envelopeValue,
  };
}
