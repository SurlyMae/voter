import React from "react";
import SummaryRow from "../SummaryRow";
import Navpane from "../Navpane";
import axios from "axios";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { states: this.props.states, membersByState: [] };
    console.log(`inside container props are ${JSON.stringify(this.props)}`);
  }

  handleClick(clicked) {
    console.log(clicked);
    const sensbyState = `https://api.propublica.org/congress/v1/members/senate/${clicked}/current.json`;

    axios
      .get(sensbyState, {
        headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A" },
      })
      .then((res) => {
        this.setState({ membersByState: res.data.results });
      });
  }

  render() {
    return (
      <div className="container">
        {
          <div className="row h-100">
            <div className="col-4 border border-5">
              <Navpane
                states={this.props.states}
                onClick={(e) => this.handleClick(e)}
              />
            </div>
            <div className="col-8 border border-5">
              {this.state.membersByState.map((member) => {
                return <SummaryRow member={member} />;
              })}
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Container;
