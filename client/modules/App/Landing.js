import React, {
	Component
} from "react";
import {
	Link
} from 'react-router-dom';


export default class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personalView: false,
		}
	}


	renderDelete(pollId) {
		if (this.state.personalView)
			return (
				<div
          className="btn"
          style={{ marginLeft: '15px' }}
          onClick={() => deletePoll(pollId)}
        >
          Delete
        </div>
			);
	}

	render() {
		let thispropspollslength = 0;
		let thispropspolls = [{
				_id: 0,
				question: "abc",
				answers: [1, 2]
			},
			{
				_id: 1,
				question: "def",
				answers: [3, 4]

			}
		];

		return (this.state.personalView && thispropspollslength === 0) ? (
				<div id = "landing">
        <h2>
          Recent Polls
        </h2>
          <h3>
            You have not created any polls.
          </h3>
          <h3>
            Click on 'Create New Poll' in the overhead menu to get started.
          </h3>
      </div>
			) :
			thispropspolls.reverse().map(poll => {
				return (
					<div className="card blue-grey darken-1" key={poll._id}>
          <div className="card-content white-text">
            <div id = "poll">
              <div>{poll.question}</div>
			  <div>
                <Link
                  to={'/poll/' + poll._id}
                  className="float right btn"
                  style={{
                    marginBottom: '15px',
                    marginLeft: '15px'
                  }}
                >
                  View
                </Link>
                <Link
                  to={'/poll/' + poll._id}
                  onClick={() => this.props.showVotes(true)}
                  className="right btn"
                  style={{ marginLeft: '15px', marginBottom: '15px' }}
                >
                  Vote
                </Link>
                {this.renderDelete(poll._id)}
              </div>
            </div>
            <div id ="personal">
              <div>
                {this.state.personalView
                  ? 'You created this poll '
                  : "Created by user '" + poll.username + "'"}{' '}
                on {new Date(poll.dateCreated).toLocaleDateString()}.
              </div>
              <div>
                <div className="right">
                  Total Votes:{' '}
                  {poll.answers.reduce(
                    (ans1, ans2) => ans1 + ans2.voteCount,
                    0
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
				);
			});
	}
}
