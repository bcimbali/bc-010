// @flow
import PropTypes from "prop-types";
import React from "react";

type Props = {
  abbr: string,
  adsr: string
};

/** Display component just shows the type of slider. */
function SliderLabel({ abbr, adsr }: Props) {
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
