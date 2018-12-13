// @flow
import PropTypes from "prop-types";
import React from "react";

type Props = {
  abbr: string
};

/** Display component just shows the type of slider. */
function SliderLabel({ abbr }: Props) {
  return (
    <div className="slider-label-container">
      <label className="slider-label">{abbr}</label>
    </div>
  );
}

SliderLabel.propTypes = {
  /** Abbreviation of the parameter the slider changes (eg. A,D,S,R). */
  abbr: PropTypes.string
};

export default SliderLabel;
