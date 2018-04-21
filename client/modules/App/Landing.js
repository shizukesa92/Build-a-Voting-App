import React, {
	Component
} from "react";



export default class Landing extends Component {

	render() {
		let login = 0,
			pollno = 0;

		return (login === 0 && pollno === 0) ? (
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
			(
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

			);
	}
}
