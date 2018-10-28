// @flow
import FilterEnvelopeSlider from "./../FilterEnvelopeSlider";
import PropTypes from "prop-types";
import React from "react";
import filterSliders from "./../../filterSliders.json";

type Props = {
  envelopeSliderChange: Function,
  filterValue: number,
  lfoValue: number
};

function FilterSliderBank({
  envelopeSliderChange,
  filterValue,
  lfoValue
}: Props) {
  return (
    <div className="slider-bank">
      {filterSliders.map(({ abbr, id, max, min, step, type }) => (
        <FilterEnvelopeSlider
          abbr={abbr}
          adsr={type}
          envelopeSliderChange={envelopeSliderChange}
          key={`${id}-${type}`}
          type="range"
          min={min}
          max={max}
          step={step}
          value={`${
            type === "filter" ? filterValue : type === "lfo" ? lfoValue : ""
          }`}
        />
      ))}
    </div>
  );
}

FilterSliderBank.propTypes = {
  envelopeSliderChange: PropTypes.func,
  filterValue: PropTypes.number,
  lfoValue: PropTypes.number
};

export default FilterSliderBank;
