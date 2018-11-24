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
      {sliderArray.map(({ abbr, id, max, min, step, type }) => (
        <EnvelopeSlider
          abbr={abbr}
          adsr={type}
          envelopeSliderChange={envelopeSliderChange}
          key={`${id}-${type}`}
          type="range"
          min={min}
          max={max}
          step={step}
          value={`${
            type === "attack"
              ? sliderParams.envelope.attack
              : type === "decay"
                ? sliderParams.envelope.decay
                : type === "sustain"
                  ? sliderParams.envelope.sustain
                  : type === "release"
                    ? sliderParams.envelope.release
                    : type === "filter"
                      ? sliderParams.baseFrequency
                      : type === "lfo"
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
