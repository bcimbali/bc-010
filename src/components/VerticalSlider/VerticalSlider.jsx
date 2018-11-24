// @flow
import React, { Component } from "react";

import PropTypes from "prop-types";
import autoBind from "react-autobind";

type Props = {
  sliderName: string,
  envelopeSliderChange: Function,
  max: number,
  min: number,
  step: number,
  type: string,
  value: number
};

/* Most likely, this value should be a number. Currently, envelopeSliderChange in
App.jsx uses ParseFloat to convert that to a number. However, it might be better to have it done in
the Vertical Slider so that App.jsx gets the correct data type from the get go. */
type State = {
  value: string
};

/** The slider component with the slider logic. */
class VerticalSlider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
      value: "1"
    };
  }

  /** Calls the function in App.jsx to update the synth timbre
   * @public
   */
  updateSynthValue(): void {
    this.props.envelopeSliderChange(this.props.sliderName, this.state.value);
  }

  /** Actually updates state in this slider instance
   * @public
   */
  updateValue(event: SyntheticEvent<HTMLInputElement>) {
    this.setState({ value: event.currentTarget.value });
  }

  /** Handles slider changes
   * @public
   */
  handleChange(event: SyntheticEvent<HTMLInputElement>) {
    this.updateValue(event);
    this.updateSynthValue();
  }

  render() {
    const { sliderName, max, min, step, value } = this.props;
    return (
      <div className="slider-housing">
        <div className="slider-container">
          <input
            slider-name={sliderName}
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
  sliderName: PropTypes.string,
  envelopeSliderChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.number
};

export default VerticalSlider;
