// @flow
import EnvelopeSlider from "./../EnvelopeSlider";
import PropTypes from "prop-types";
import React from "react";

type Props = {
  sliderArray: Array<Object>,
  sliderParams: Object,
  typeOfParams: string,
};

/** Houses all the tweakable sliders. */
function SliderBank({ sliderArray, sliderParams, typeOfParams }: Props) {
  return (
    <section className="slider-bank">
      {sliderArray.map(({ abbr, id, max, min, sliderName, step }) => (
        <EnvelopeSlider
          abbr={abbr}
          sliderName={sliderName}
          key={`${id}-${sliderName}`}
          type="range"
          typeOfParams={typeOfParams}
          min={min}
          max={max}
          step={step}
          value={sliderParams[sliderName]}
        />
      ))}
    </section>
  );
}

SliderBank.propTypes = {
  /** List of sliders to be created. */
  sliderArray: PropTypes.array,
  /** All tweakable properties accessible in the slider bank.  */
  sliderParams: PropTypes.object,
  /** Name of the object of which envelope to be adjusted */
  typeOfParams: PropTypes.string,
};

export default SliderBank;
