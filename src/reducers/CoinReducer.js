const INITIAL_STATE = {
    count: 0
}

export default (state = INITIAL_STATE,  action) => {
    switch(action.type) {
        case 'CHANGE_BADGE':
            return { ...state, count: action.payload.count };
        default:
            return state;
    }
}