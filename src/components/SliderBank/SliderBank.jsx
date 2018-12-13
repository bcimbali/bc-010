// @flow
import EnvelopeSlider from "./../EnvelopeSlider";
import PropTypes from "prop-types";
import React from "react";

type Props = {
  envelopeSliderChange: Function,
  sliderArray: Array<Object>,
  sliderParams: Object
};

/** Houses all the tweakable sliders. */
function SliderBank({
  envelopeSliderChange,
  sliderArray,
  sliderParams
}: Props) {
  return (
    <div className="slider-bank">
      {sliderArray.map(({ abbr, id, max, min, sliderName, step }) => (
        <EnvelopeSlider
          abbr={abbr}
          sliderName={sliderName}
          envelopeSliderChange={envelopeSliderChange}
          key={`${id}-${sliderName}`}
          type="range"
          min={min}
          max={max}
          step={step}
          value={sliderParams[sliderName]}
        />
      ))}
    </div>
  );
}

SliderBank.propTypes = {
  /** Takes in a number & envelope name. Updates App.jsx state for the envelope name with the passed in number. */
  envelopeSliderChange: PropTypes.func,
  sliderArray: PropTypes.array,
  /** All tweakable properties accessible in the slider bank.  */
  sliderParams: PropTypes.object
};

export default SliderBank;
