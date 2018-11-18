// @flow
import React, { Component } from "react";

import PropTypes from "prop-types";
import SliderLabel from "./../SliderLabel";
import SliderNumberDisplay from "./../SliderNumberDisplay";
import autoBind from "react-autobind";

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

/** Most likely, this value should be a number. Currently, envelopeSliderChange in
App.jsx uses ParseFloat to convert that to a number. However, it might be better to have it done in
the Vertical Slider so that App.jsx gets the correct data type from the get go. */
type State = {
  value: string
};

/** Slider for the filter bank sliders. Holds SliderLabel and SliderNumberDisplay components. */
class FilterEnvelopeSlider extends Component<Props, State> {
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
    this.props.envelopeSliderChange(this.props.adsr, this.state.value);
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
  handleChange(event: SyntheticEvent<HTMLInputElement>): void {
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
