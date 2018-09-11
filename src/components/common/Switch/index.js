import * as React from "react";

import FlipToggle from "./FlipToggle";

export interface Props {
  value: boolean;
  onToggle: any;
}

export interface State {}

class Switch extends React.Component<Props, State> {
  render() {

    return (
      <FlipToggle
        value={this.props.value}
        sliderWidth={20}
        sliderHeight={20}
        buttonWidth={34}
        buttonHeight={14}
        buttonRadius={50}
        sliderRadius={50}
        onLabel="Yes"
        offLabel="No"
        labelStyle={{
          fontSize: 8,
        }}
        buttonOnColor="rgba(255,127,170,1)"
        buttonOffColor="rgba(178,178,178,1)"
        sliderOnColor="rgba(233,30,99,1)"
        sliderOffColor="rgba(255,255,255,1)"
        onToggle={this.props.onToggle}
        disabled={this.props.disabled}
      />
		);
	}
}

export default Switch;
