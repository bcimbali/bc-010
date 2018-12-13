// @flow
import PropTypes from "prop-types";
import React from "react";
import SliderLabel from "./../SliderLabel";
import SliderNumberDisplay from "./../SliderNumberDisplay";
import VerticalSlider from "./../VerticalSlider";

type Props = {
  abbr: string,
  sliderName: string,
  envelopeSliderChange: Function,
  max: number,
  min: number,
  step: number,
  type: string,
  value: number
};

/** Holds all the slider components (SliderLabel, VerticalSlider, SliderNumberDisplay) */
function EnvelopeSlider({
  abbr,
  sliderName,
  envelopeSliderChange,
  type,
  min,
  max,
  step,
  value
}: Props) {
  return (
    <div className="envelopeSlider">
      <SliderLabel abbr={abbr} sliderName={type} />
      <VerticalSlider
        sliderName={sliderName}
        envelopeSliderChange={envelopeSliderChange}
        max={max}
        min={min}
        step={step}
        type={type}
        value={value}
      />
      <SliderNumberDisplay value={value} />
    </div>
  );
}

EnvelopeSlider.propTypes = {
  /** Abbreviation of the parameter the slider changes (eg. A,D,S,R). */
  abbr: PropTypes.string,
  /** Full name of the parameter the slider changes (eg. "attack", "decay" etc.) */
  sliderName: PropTypes.string,
  /** Takes in a number & envelope name. Updates App.jsx state for the envelope name with the passed in number. */
  envelopeSliderChange: PropTypes.func,
  /** Maximum value the slider can reach. */
  max: PropTypes.number,
  /** Minimum value the slider can reach. */
  min: PropTypes.number,
  /** Specifies the size of each movement for the slider control */
  step: PropTypes.number,
  /** Always listed as "range" so that each HTML slider is of range type. */
  type: PropTypes.string,
  /** Value for that parameter as it is in App.jsx state. */
  value: PropTypes.number
};

export default EnvelopeSlider;
