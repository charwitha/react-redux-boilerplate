const initialState = {
  action: ''  
}

export default function sampleReducer(state = initialState, action) {
    switch(action.type) {
        case "ACTION_NAME":
            return {...state, action: 'sample action'}
        default:
            return state;
    }
}
