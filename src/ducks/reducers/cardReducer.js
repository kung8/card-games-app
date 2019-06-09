const initialState = {
    cards: []
}

const HANDLE_CARDS = 'HANDLE_CARDS'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_CARDS:
            return { ...state, cards: action.payload }
        default:
            return state
    }
}

export function handleCards(cards){
    return {
        type:HANDLE_CARDS,
        payload: cards
    }
}

// const [state,dispatch] = useReducer(reducer, initialState)

