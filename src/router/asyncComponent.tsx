// @ts-nocheck
import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      if (this.hasLoadedComponent()) {
        return;
      }
      const { default: component } = await importComponent();
      this.setState({
        component
      });
    }

    componentWillUnmount() {
      this.setState = () => {
        return false;
      };
    }

    hasLoadedComponent() {
      return this.state.component !== null;
    }

    render() {
      const C = this.state.component;
      console.log(C);
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
