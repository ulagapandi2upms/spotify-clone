
export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    discover_weekly: [],
    token: '',
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