import axios from 'axios'
import {
    QUEST_LIST_REQUEST,
    QUEST_LIST_SUCCESS,
    QUEST_LIST_FAIL,

    QUEST_DETAILS_REQUEST,
    QUEST_DETAILS_SUCCESS,
    QUEST_DETAILS_FAIL,

    QUEST_DELETE_REQUEST,
    QUEST_DELETE_SUCCESS,
    QUEST_DELETE_FAIL,

    QUEST_CREATE_REQUEST,
    QUEST_CREATE_SUCCESS,
    QUEST_CREATE_FAIL,

    QUEST_UPDATE_REQUEST,
    QUEST_UPDATE_SUCCESS,
    QUEST_UPDATE_FAIL,

} from '../constants/questConstants'

export const listQuests = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: QUEST_LIST_REQUEST })

        const { data } = await axios.get(`/quests${keyword}`)

        dispatch({
            type: QUEST_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: QUEST_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listQuestDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: QUEST_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/quests/${id}`)

        dispatch({
            type: QUEST_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: QUEST_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteQuest = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: QUEST_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/quests/delete/${id}/`,
            config
        )

        dispatch({
            type: QUEST_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: QUEST_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createQuest = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: QUEST_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/quests/create/`,
            {},
            config
        )
        dispatch({
            type: QUEST_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: QUEST_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateQuest = (quest) => async (dispatch, getState) => {
    try {
        dispatch({
            type: QUEST_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/quests/update/${quest._id}/`,
            quest,
            config
        )
        dispatch({
            type: QUEST_UPDATE_SUCCESS,
            payload: data,
        })


        dispatch({
            type: QUEST_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: QUEST_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}