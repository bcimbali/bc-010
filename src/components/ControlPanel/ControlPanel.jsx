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
  envelopeSliderChange: Function,
  filterParams: Object,
  octave: number,
  synthParams: Object,
  toggleOscillator: Function
};

/** Component to hold all tweakable parameters (e.g. sliders, knobs etc.) for the synth. */
function ControlPanel({
  adjustOctave,
  envelopeSliderChange,
  filterParams,
  octave,
  toggleOscillator,
  synthParams
}: Props) {
  return (
    <div className="controlPanel">
      <SliderBank
        envelopeSliderChange={envelopeSliderChange}
        sliderParams={synthParams.envelope}
        sliderArray={envelopeSliders}
      />
      <SliderBank
        envelopeSliderChange={envelopeSliderChange}
        sliderParams={filterParams}
        sliderArray={filterSliders}
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
    </div>
  );
}

ControlPanel.propTypes = {
  adjustOctave: PropTypes.func,
  envelopeSliderChange: PropTypes.func,
  filterParams: PropTypes.object,
  octave: PropTypes.number,
  synthParams: PropTypes.object,
  toggleOscillator: PropTypes.func
};

export default ControlPanel;
