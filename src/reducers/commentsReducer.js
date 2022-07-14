import { v4 as uuidv4 } from 'uuid';


export function commentsReducer(state, action) {
	switch(action.type) {
		case 'POPULATE_COMMENTS':
			return [...action.value];
		case 'ADD_COMMENT':
			return [...state, {id: uuidv4(), ...action.comment}];
		default:
			return state;
	}
}