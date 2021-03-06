import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

export default class SubHeader extends Component {
  static propTypes = {
    ballotItemWeVoteId: PropTypes.string,
    pathname: PropTypes.string
  };
  constructor (props) {
    super(props);
  }

  render () {
    var { props: { pathname, ballotItemWeVoteId } } = this;
    /* Switch between A) a link (moreOpinionsLink) to a list of opinions about any item on the ballot, or
     * B) a link to a list of opinions just about one ballot item. */
    var moreOpinionsLink;
    function getStringAfterSlash (str) {
      return str.split("/")[2];
    }
    ballotItemWeVoteId = getStringAfterSlash(pathname); /* figure out ballotItemWeVoteId here until we can pass it in */
    if (pathname === "/candidate/" + ballotItemWeVoteId) {
      moreOpinionsLink = "/opinions/" + ballotItemWeVoteId;
    } else {
      moreOpinionsLink = "/opinions";
    }
    return <section className="container-fluid ballotList-bg fluff-tight--full separate-bottom">
          <div className="row">
            <Link
              to="/friends/add"
              className="font-darkest fluff-left-narrow utils-align--super">
              <div className="col-xs-6 col-md-6 text-center">
                <i className="icon-icon-add-friends-2-1 icon-light icon-medium">
                </i>
                  Add Friends
              </div>
            </Link>
            <Link
              to={moreOpinionsLink}
              className="font-darkest fluff-left-narrow utils-align--super">
              <div className="col-xs-6 col-md-6 text-center">
                <i className="icon-icon-more-opinions-2-2 icon-light icon-medium">
                </i>
                  More Opinions
              </div>
            </Link>
          </div>
      </section>;
  }
}
