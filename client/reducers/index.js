
const reducers = (state = {}, action) => {
	switch(action.type){
		case 'LIKE' : console.log('post liked!')

		default: return state;
	}
};

export {
	reducers
};