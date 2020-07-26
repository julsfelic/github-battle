import React from "react";

export default function withHover(Component, propName = "hovering") {
  return class WithHover extends React.Component {
    state = {
      hovering: false
    };

    mouseOver = id => {
      this.setState({
        hovering: true
      });
    };

    mouseOut = id => {
      this.setState({
        hovering: false
      });
    };

    render() {
      const props = {
        [propName]: this.state.hovering,
        ...this.props
      };

      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...props} />
        </div>
      );
    }
  };
}
