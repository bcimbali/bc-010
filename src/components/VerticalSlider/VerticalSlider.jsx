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

type State = {
  value: number
};

/** The slider component with the HTML input slider logic. */
class VerticalSlider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
      value: 0
    };
  }

  /** Calls the function in App.jsx to update the synth timbre
   * @public
   */
  updateSynthValue(): void {
    this.props.envelopeSliderChange(this.props.sliderName, this.state.value);
  }

  /** Actually updates state in this slider state.
   * @public
   */
  updateValue(value: number): void {
    this.setState({ value: value });
  }

  /** Handler for HTML input slider changes. Makes sure the argument
   * passed into updateValue() is a number.
   * @public
   */
  handleChange(event: SyntheticEvent<HTMLInputElement>): void {
    this.updateValue(parseFloat(event.currentTarget.value));
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
