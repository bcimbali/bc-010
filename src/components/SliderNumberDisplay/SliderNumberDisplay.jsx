// @flow
import PropTypes from "prop-types";
import React from "react";

type Props = {
  value: number
};

/** Display component that shows the real-time value of the slider. */
function SliderNumberDisplay({ value }: Props) {
  return (
    <div className="slider-number-container">
      <p className="slider-number">{value}</p>
    </div>
  );
}

SliderNumberDisplay.propTypes = {
  /** Value for that slider parameter as it is in App.jsx state. */
  value: PropTypes.number
};

export default SliderNumberDisplay;
