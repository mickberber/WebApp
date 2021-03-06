import React, { Component, PropTypes } from "react";
import CandidateList from "../../components/Ballot/CandidateList";
import Measure from "../../components/Ballot/Measure";
import StarAction from "../../components/Widgets/StarAction";

const TYPES = require("keymirror")({
  OFFICE: null,
  MEASURE: null
});

export default class BallotItem extends Component {
  static propTypes = {
    kind_of_ballot_item: PropTypes.string.isRequired,
    we_vote_id: PropTypes.string.isRequired,
    ballot_item_display_name: PropTypes.string.isRequired,
    candidate_list: PropTypes.array
  };

  isMeasure () {
    return this.props.kind_of_ballot_item === TYPES.MEASURE;
  }

  render () {
    return <div className="ballot-item well well-skinny gutter-top--small">

        <span className="display-name">
          { this.props.ballot_item_display_name }
        </span>

        <StarAction
          we_vote_id={ this.props.we_vote_id }
          type={ this.props.kind_of_ballot_item } />

        { this.isMeasure() ? <Measure {...this.props} /> : <CandidateList children={this.props.candidate_list}/> }

      </div>;
  }
}
