// @flow
import React, { Component } from "react";

import PropTypes from "prop-types";
import autoBind from "react-autobind";

type Props = {
  adsr: string,
  envelopeSliderChange: Function,
  max: number,
  min: number,
  step: number,
  type: string,
  value: string
};

/* Most likely, this value should be a number. Currently, envelopeSliderChange in
App.jsx uses ParseFloat to convert that to a number. However, it might be better to have it done in
the Vertical Slider so that App.jsx gets the correct data type from the get go. */
type State = {
  value: string
};

class VerticalSlider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
      value: "1"
    };
  }

  /** Calls the function in App.jsx to update the synth timbre */
  updateSynthValue(): void {
    this.props.envelopeSliderChange(this.props.adsr, this.state.value);
  }

  /** Actually updates state in this slider instance */
  updateValue(event: SyntheticEvent<HTMLInputElement>) {
    this.setState({ value: event.currentTarget.value });
  }

  /** Handles slider changes */
  handleChange(event: SyntheticEvent<HTMLInputElement>) {
    this.updateValue(event);
    this.updateSynthValue();
  }

  render() {
    const { adsr, max, min, step, value } = this.props;
    return (
      <div className="slider-housing">
        <div className="slider-container">
          <input
            adsr={adsr}
            className="html-slider"
            type="range"
            min={min}
            max={max}
            onChange={this.handleChange}
            step={step}
            value={value}
          />
        </div>
      </div>
    );
  }
}

VerticalSlider.propTypes = {
  adsr: PropTypes.string,
  envelopeSliderChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string
};

export default VerticalSlider;
