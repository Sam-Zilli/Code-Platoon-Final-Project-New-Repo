import axios from 'axios'
import { DONE_LIST_ADD_ITEM, DONE_LIST_REMOVE_ITEM } from '../constants/done_listConstants'

export const addToDone_list = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: DONE_LIST_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.nanme,
            image:data.image,
            value:data.value,
            qty
            }
    })

localStorage.setItem('done_listItems', JSON.stringify(getState().done_list.done_listItems))
}


export const removeFromDone_list = (id) => (dispatch, getState) => {
    dispatch({
        type:DONE_LIST_REMOVE_ITEM,
        payload:id,
    })
    localStorage.setItem('done_listItems', JSON.stringify(getState().done_list.done_listItems))
}