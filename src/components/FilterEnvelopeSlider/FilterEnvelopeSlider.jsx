// @flow
import React, { Component } from "react";

import PropTypes from "prop-types";
import SliderLabel from "./../SliderLabel";
import SliderNumberDisplay from "./../SliderNumberDisplay";

type Props = {
  abbr: string,
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

class FilterEnvelopeSlider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.updateSynthValue = this.updateSynthValue.bind(this);
    this.state = {
      value: "1"
    };
  }

  // Calls the function in App.jsx to update the synth timbre
  updateSynthValue: Function;
  updateSynthValue() {
    this.props.envelopeSliderChange(this.props.adsr, this.state.value);
  }

  // Actually updates state in this slider instance
  updateValue: Function;
  updateValue(event: SyntheticInputEvent<*>) {
    this.setState({ value: event.target.value });
  }

  // Handles slider changes
  handleChange: Function;
  handleChange(event: Event) {
    this.updateValue(event);
    this.updateSynthValue();
  }

  render() {
    const { abbr, type, min, max, step, value } = this.props;
    return (
      <div className="envelopeSlider">
        <SliderLabel abbr={abbr} adsr={type} />
        <div className="slider-housing">
          <div className="slider-container">
            <input
              adsr={type}
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
        <SliderNumberDisplay value={value} />
      </div>
    );
  }
}

FilterEnvelopeSlider.propTypes = {
  abbr: PropTypes.string,
  envelopeSliderChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string
};

export default FilterEnvelopeSlider;
