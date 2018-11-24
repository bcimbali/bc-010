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
          adsr={sliderName}
          envelopeSliderChange={envelopeSliderChange}
          key={`${id}-${sliderName}`}
          type="range"
          min={min}
          max={max}
          step={step}
          value={`${
            sliderName === "attack"
              ? sliderParams.envelope.attack
              : sliderName === "decay"
                ? sliderParams.envelope.decay
                : sliderName === "sustain"
                  ? sliderParams.envelope.sustain
                  : sliderName === "release"
                    ? sliderParams.envelope.release
                    : sliderName === "filter"
                      ? sliderParams.baseFrequency
                      : sliderName === "lfo"
                        ? sliderParams.frequency
                        : ""
          }`}
        />
      ))}
    </div>
  );
}

SliderBank.propTypes = {
  envelopeSliderChange: PropTypes.func,
  sliderArray: PropTypes.array,
  sliderParams: PropTypes.object
};

export default SliderBank;
