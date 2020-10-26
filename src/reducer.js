
export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    discover_weekly: [],
    // token: 'BQB7obC8teVENbTAjGeE8HpPxEmK-78g6eupvvBmMwrmVjc7bktn3zi-P6fwvG73QhKvRA2tAPjgb7DoyIas9hm7a2LVUj9XkFXSmyzdHVgeGwi4SVdJFa6cJZ3M9aT8NB_rV2OY0-jaERnyl7cBx9BEa1gFB8c_9Bw-KY9_6XldgAHPBcwO',
}

export const reducer = (state, action) => {
    console.log(action, state);

    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN' :
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists : action.playlists
            }
        case 'SET_WEEKLY_DISCOVER':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
}

export default reducer;