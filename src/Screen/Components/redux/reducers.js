import { data } from '../../../Data/FakeData'

const initialState = {
    addToCart: [],
    productsList: data,
    finishedCart: []
}

const productsReducers = (state = initialState, action) => {
        const checked = state.addToCart.find(c => c.id === action.payload.id)
        switch (action.type) {
            case 'ADD_TO_CART':
                const newStore = {
                    ...state,
                    addToCart: checked ? alert("Allready Added") || [...state.addToCart] : [...state.addToCart, action.payload]

                }
                return newStore



            case 'REMOVE_FROM_CART':
                const newState = {
                    ...state,
                    addToCart: state.addToCart.filter(b => b.id !== action.payload)
                }
                return newState
            case 'FINISHED_CART':
                const newList = {
                    ...state,
                    addToCart: []

                }
                return newList
            default:
                return state

        }

    }
export default productsReducers