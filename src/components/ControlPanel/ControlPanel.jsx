// @flow
import OctaveContainer from "./../OctaveContainer";
import OscillatorBtn from "./../OscillatorBtn";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import SliderBank from "../SliderBank/SliderBank";
import envelopeSliders from "./../../envelopeSliders.json";
import filterSliders from "./../../filterSliders.json";
import oscillatorTypes from "./../../oscillatorTypes.json";

const ControlPanelContainer = styled.section`
  background-color: #b2ff5a;
  border: 2px solid #40522d;
  display: flex;
  height: 50vh;
  justify-content: space-evenly;
`;

type Props = {
  filterParams: Object,
  octave: number,
  synthParams: Object,
  toggleOscillator: Function,
};

/** Component to hold all tweakable parameters (e.g. sliders, knobs etc.) for the synth. */
function ControlPanel({
  filterParams,
  octave,
  toggleOscillator,
  synthParams,
}: Props) {
  return (
    <ControlPanelContainer>
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
      <OctaveContainer key="octave-container" octave={octave} />
      {oscillatorTypes.map(({ abbr, id, type }) => (
        <OscillatorBtn
          abbr={abbr}
          key={`${id}-${type}`}
          toggleOscillator={toggleOscillator}
          synthParams={synthParams}
          type={type}
        />
      ))}
    </ControlPanelContainer>
  );
}

ControlPanel.propTypes = {
  /** Holds all tweakable properties for the Tone.js filter. */
  filterParams: PropTypes.object,
  /** Current octave for the keyboard. Derived from App.jsx state. */
  octave: PropTypes.number,
  /** Holds all tweakable properties for the Tone.js synth. */
  synthParams: PropTypes.object,
  /** Handles change in oscillator types for Tone.js synth. */
  toggleOscillator: PropTypes.func,
};

export default ControlPanel;
