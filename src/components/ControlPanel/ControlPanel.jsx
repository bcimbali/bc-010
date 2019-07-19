// @flow
import OctaveContainer from "./../OctaveContainer";
import OscillatorBtn from "./../OscillatorBtn";
import PropTypes from "prop-types";
import React from "react";
import SliderBank from "../SliderBank/SliderBank";
import envelopeSliders from "./../../envelopeSliders.json";
import filterSliders from "./../../filterSliders.json";
import oscillatorTypes from "./../../oscillatorTypes.json";

type Props = {
  adjustOctave: Function,
  filterParams: Object,
  octave: number,
  synthParams: Object,
  toggleOscillator: Function,
};

/** Component to hold all tweakable parameters (e.g. sliders, knobs etc.) for the synth. */
function ControlPanel({
  adjustOctave,
  filterParams,
  octave,
  toggleOscillator,
  synthParams,
}: Props) {
  return (
    <section className="controlPanel">
      <SliderBank
        sliderParams={synthParams}
        sliderArray={envelopeSliders}
        typeOfParams="synthParams"
      />
      <SliderBank
        sliderParams={filterParams}
        sliderArray={filterSliders}
        typeOfParams="filterParams"
      />
      <OctaveContainer
        key="octave-container"
        adjustOctave={adjustOctave}
        octave={octave}
      />
      {oscillatorTypes.map(({ abbr, id, type }) => (
        <OscillatorBtn
          abbr={abbr}
          key={`${id}-${type}`}
          toggleOscillator={toggleOscillator}
          synthParams={synthParams}
          type={type}
        />
      ))}
    </section>
  );
}

ControlPanel.propTypes = {
  /** Moves ocatve range of keyboard notes up or down */
  adjustOctave: PropTypes.func,
  /** Holds all tweakable properties for the Tone.js filter. */
  filterParams: PropTypes.object,
  /** Current octave for the keyboard. Derived from App.jsx state. */
  octave: PropTypes.number,
  /** Holds all tweakable properties for the Tone.js synth. */
  synthParams: PropTypes.object,
  /** Handles change in oscillator types for Tone.js synth. */
  toggleOscillator: PropTypes.func
};

export default ControlPanel;