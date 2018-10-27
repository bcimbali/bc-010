// @flow
import PropTypes from "prop-types";
import React from "react";

type Props = {
  value: string
};

function SliderNumberDisplay({ value }: Props) {
  return (
    <div className="slider-number-container">
      <p className="slider-number">{value}</p>
    </div>
  );
}

SliderNumberDisplay.propTypes = {
  value: PropTypes.string
};

export default SliderNumberDisplay;
