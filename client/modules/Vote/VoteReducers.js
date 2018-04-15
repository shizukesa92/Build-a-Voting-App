// Auth
import {
	FETCH_USER
} from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
}
// Gateway
import {
	LOG_IN
} from '../actions/types';

export default (state = '', action) => {
	switch (action.type) {
		case LOG_IN:
			return action.type;
		default:
			return state;
	}
};

// polls
import {
	FETCH_POLLS
} from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_POLLS:
			return action.payload;
		default:
			return state;
	}
};
// showvotes
import {
	SHOW_VOTES
} from '../actions/types';

export default function(state = false, action) {
	switch (action.type) {
		case SHOW_VOTES:
			return action.show;
		default:
			return state;
	}
}