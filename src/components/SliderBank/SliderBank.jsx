// @flow
import EnvelopeSlider from "./../EnvelopeSlider";
import PropTypes from "prop-types";
import React from "react";

type Props = {
  attackValue: number,
  decayValue: number,
  sustainValue: number,
  releaseValue: number,
  filterValue: number,
  lfoValue: number,
  envelopeSliderChange: Function,
  sliderArray: Array<Object>
};

/** Houses all the tweakable sliders. */
function SliderBank({
  attackValue,
  decayValue,
  sustainValue,
  releaseValue,
  filterValue,
  lfoValue,
  envelopeSliderChange,
  sliderArray
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
              ? attackValue
              : type === "decay"
                ? decayValue
                : type === "sustain"
                  ? sustainValue
                  : type === "release"
                    ? releaseValue
                    : type === "filter"
                      ? filterValue
                      : type === "lfo"
                        ? lfoValue
                        : ""
          }`}
        />
      ))}
    </div>
  );
}

SliderBank.propTypes = {
  attackValue: PropTypes.number,
  decayValue: PropTypes.number,
  sustainValue: PropTypes.number,
  releaseValue: PropTypes.number,
  envelopeSliderChange: PropTypes.func,
  sliderArray: PropTypes.array
};

export default SliderBank;
