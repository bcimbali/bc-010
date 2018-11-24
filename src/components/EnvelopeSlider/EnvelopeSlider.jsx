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
  abbr: PropTypes.string,
  sliderName: PropTypes.string,
  envelopeSliderChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.number
};

export default EnvelopeSlider;
