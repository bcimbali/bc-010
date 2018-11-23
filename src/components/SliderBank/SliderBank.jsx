// @flow
import EnvelopeSlider from "./../EnvelopeSlider";
import PropTypes from "prop-types";
import React from "react";

type Props = {
  filterValue: number,
  lfoValue: number,
  envelopeSliderChange: Function,
  sliderArray: Array<Object>,
  synthParams: Object
};

/** Houses all the tweakable sliders. */
function SliderBank({
  filterValue,
  lfoValue,
  envelopeSliderChange,
  sliderArray,
  synthParams
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
              ? synthParams.envelope.attack
              : type === "decay"
                ? synthParams.envelope.decay
                : type === "sustain"
                  ? synthParams.envelope.sustain
                  : type === "release"
                    ? synthParams.envelope.release
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
  envelopeSliderChange: PropTypes.func,
  sliderArray: PropTypes.array,
  synthParams: PropTypes.object
};

export default SliderBank;
