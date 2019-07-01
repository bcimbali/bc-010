// @flow
import React, { Component } from "react";

import PropTypes from "prop-types";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateEnvelope } from "./../../actions.js";

type Props = {
  sliderName: string,
  envelopeSliderChange: Function,
  max: number,
  min: number,
  step: number,
  type: string,
  updateEnvelope: Function,
  value: number,
};

type State = {
  value: number,
};

/** The slider component with the HTML input slider logic. */
class VerticalSlider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
      value: 0,
    };
  }

  /** Calls the function in App.jsx to update the synth timbre
   * @public
   */
  updateSynthValue(): void {
    this.props.envelopeSliderChange(this.props.sliderName, this.state.value);
    this.props.updateEnvelope(this.props.sliderName, this.state.value);
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

const mapStateToProps = state => ({
  envelope: state.synthesizer.synthParams.envelope,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateEnvelope,
    },
    dispatch,
  );

VerticalSlider.propTypes = {
  /** Full name of the parameter the slider changes (eg. "attack", "decay" etc.) */
  sliderName: PropTypes.string,
  /** Takes in a number & envelope name. Updates App.jsx state for the envelope name with the passed in number. */
  envelopeSliderChange: PropTypes.func,
  /** Maximum value the slider can reach. */
  max: PropTypes.number,
  /** Minimum value the slider can reach. */
  min: PropTypes.number,
  /** Specifies the size of each movement for the slider control */
  step: PropTypes.number,
  /** Always listed as "range" so that each HTML slider is of range type. */
  type: PropTypes.string,
  /** Value for that parameter as it is in App.jsx state. */
  value: PropTypes.number,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerticalSlider);
