import React from "react";

export default class Privacy extends React.Component {
  constructor (props) {
    super(props);
  }

  static getProps () {
    return {};
  }

  render () {
    return <div>
        <div className="container-fluid well well-90">
          <h2 className="text-center">Terms and Policies</h2>
          Coming soon.
        </div>
      </div>;
  }
}
