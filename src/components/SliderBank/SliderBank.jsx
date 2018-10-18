import EnvelopeSlider from "./../EnvelopeSlider";
import PropTypes from "prop-types";
import React from "react";
import envelopeSliders from "./../../envelopeSliders.json";

function SliderBank({
  attackValue,
  decayValue,
  sustainValue,
  releaseValue,
  envelopeSliderChange
}) {
  return (
    <div className="slider-bank">
      {envelopeSliders.map(({ abbr, id, max, min, step, type }) => (
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
  envelopeSliderChange: PropTypes.func
};

export default SliderBank;
