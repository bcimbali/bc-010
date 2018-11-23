// @flow
import OctaveContainer from "./../OctaveContainer";
import OscillatorBtn from "./../OscillatorBtn";
import PropTypes from "prop-types";
import React from "react";
import SliderBank from "../SliderBank/SliderBank";
import adsrSliders from "./../../envelopeSliders.json";
import filterSliders from "./../../filterSliders.json";
import oscillatorTypes from "./../../oscillatorTypes.json";

type Props = {
  decreaseOctave: Function,
  envelopeSliderChange: Function,
  filterValue: number,
  increaseOctave: Function,
  lfoValue: number,
  octave: number,
  toggleOscillator: Function,
  synthParams: Object
};

/** Component to hold all tweakable parameters (e.g. sliders, knobs etc.) for the synth. */
function ControlPanel({
  decreaseOctave,
  envelopeSliderChange,
  filterValue,
  increaseOctave,
  lfoValue,
  octave,
  toggleOscillator,
  synthParams
}: Props) {
  return (
    <div className="controlPanel">
      <SliderBank
        filterValue={filterValue}
        lfoValue={lfoValue}
        envelopeSliderChange={envelopeSliderChange}
        sliderArray={adsrSliders}
        synthParams={synthParams}
      />
      <SliderBank
        filterValue={filterValue}
        lfoValue={lfoValue}
        envelopeSliderChange={envelopeSliderChange}
        sliderArray={filterSliders}
        synthParams={synthParams}
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
  filterValue: PropTypes.number,
  increaseOctave: PropTypes.func,
  lfoValue: PropTypes.number,
  octave: PropTypes.number,
  toggleOscillator: PropTypes.func,
  synthParams: PropTypes.object
};

export default ControlPanel;
