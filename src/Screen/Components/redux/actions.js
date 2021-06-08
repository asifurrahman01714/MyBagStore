export const addToCart = (payload) => {
    return {
        type: 'ADD_TO_CART',
        payload
    }
}
export const removeFromCart = (payload) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload
    }
}
export const finishedCart = (payload) => {
    return {
        type: 'FINISHED_CART',
        payload
    }
}