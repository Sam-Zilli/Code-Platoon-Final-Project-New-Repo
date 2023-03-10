import {
    DONE_LIST_ADD_ITEM,
    DONE_LIST_REMOVE_ITEM,
    // DONE_LIST_SAVE_SHIPPING_ADDRESS,

    // DONE_LIST_SAVE_PAYMENT_METHOD,

    // DONE_LIST_CLEAR_ITEMS,
} from '../constants/done_listConstants'

export const done_listReducer = (state = { done_listItems:[] }, action) => {
    switch (action.type) {
        case DONE_LIST_ADD_ITEM:
            const item = action.payload
            const existItem = state.done_listItems.find(x => x.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    done_listItems: state.done_listItems.map(x =>
                        x.product === existItem.product ? item : x)
                }

            } else {
                return {
                    ...state,
                    done_listItems: [...state.done_listItems, item]
                }
            }

        case DONE_LIST_REMOVE_ITEM:
            return {
                ...state,
                done_listItems: state.done_listItems.filter(x => x.product !== action.payload)
            }
            
        default:
            return state
    }
}