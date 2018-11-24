// @flow
import EnvelopeSlider from "./../EnvelopeSlider";
import PropTypes from "prop-types";
import React from "react";

type Props = {
  envelopeSliderChange: Function,
  sliderArray: Array<Object>,
  sliderParams: Object
};

/** Get the number value for the slider parameter, from the params object.
 * @public
 */
function getSliderValue(
  nameToFind: string,
  objToSearch: Object
): string | void {
  if (objToSearch.envelope) {
    return objToSearch.envelope[nameToFind];
  }
  if (objToSearch.filter) {
    return objToSearch[nameToFind];
  }
}

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
          value={getSliderValue(sliderName, sliderParams)}
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
