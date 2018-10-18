import PropTypes from "prop-types";
import React from "react";

function SliderLabel({ abbr, adsr }) {
  return (
    <div className="slider-label-container">
      <label className="slider-label" htmlFor={adsr}>
        {abbr}
      </label>
    </div>
  );
}

SliderLabel.propTypes = {
  abbr: PropTypes.string,
  adsr: PropTypes.string
};

export default SliderLabel;
