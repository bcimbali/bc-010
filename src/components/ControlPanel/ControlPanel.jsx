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
  decreaseOctave: Function,
  envelopeSliderChange: Function,
  filterParams: Object,
  increaseOctave: Function,
  octave: number,
  synthParams: Object,
  toggleOscillator: Function
};

/** Component to hold all tweakable parameters (e.g. sliders, knobs etc.) for the synth. */
function ControlPanel({
  decreaseOctave,
  envelopeSliderChange,
  filterParams,
  increaseOctave,
  octave,
  toggleOscillator,
  synthParams
}: Props) {
  return (
    <div className="controlPanel">
      <SliderBank
        envelopeSliderChange={envelopeSliderChange}
        sliderParams={synthParams}
        sliderArray={envelopeSliders}
      />
      <SliderBank
        envelopeSliderChange={envelopeSliderChange}
        sliderParams={filterParams}
        sliderArray={filterSliders}
      />
      <OctaveContainer
        key="octave-container"
        decreaseOctave={decreaseOctave}
        increaseOctave={increaseOctave}
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
    </div>
  );
}

ControlPanel.propTypes = {
  decreaseOctave: PropTypes.func,
  envelopeSliderChange: PropTypes.func,
  filterParams: PropTypes.object,
  increaseOctave: PropTypes.func,
  octave: PropTypes.number,
  synthParams: PropTypes.object,
  toggleOscillator: PropTypes.func
};

export default ControlPanel;
