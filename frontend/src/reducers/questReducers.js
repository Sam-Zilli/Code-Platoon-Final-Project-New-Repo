// for altering the state of quests
// ADDED

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
    QUEST_CREATE_RESET,

    QUEST_UPDATE_REQUEST,
    QUEST_UPDATE_SUCCESS,
    QUEST_UPDATE_FAIL,
    QUEST_UPDATE_RESET,
} from '../constants/questConstants'


export const questListReducer = (state = { quests: [] }, action) => {
    switch (action.type) {
        case QUEST_LIST_REQUEST:
            return { loading: true, quests: [] }

        case QUEST_LIST_SUCCESS:
            return {
                loading: false,
                quests: action.payload,
                // page: action.payload.page,
                // pages: action.payload.pages
            }

        case QUEST_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const questDetailsReducer = (state = { quest: [] }, action) => {
    switch (action.type) {
        case QUEST_DETAILS_REQUEST:
            return { loading: true, ...state }

        case QUEST_DETAILS_SUCCESS:
            return { loading: false, quest: action.payload }

        case QUEST_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const questDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case QUEST_DELETE_REQUEST:
            return { loading: true }

        case QUEST_DELETE_SUCCESS:
            return { loading: false, success: true }

        case QUEST_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const questCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case QUEST_CREATE_REQUEST:
            return { loading: true }

        case QUEST_CREATE_SUCCESS:
            return { loading: false, success: true, quest: action.payload }

        case QUEST_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case QUEST_CREATE_RESET:
            return {}

        default:
            return state
    }
}


export const questUpdateReducer = (state = { quest: {} }, action) => {
    switch (action.type) {
        case QUEST_UPDATE_REQUEST:
            return { loading: true }

        case QUEST_UPDATE_SUCCESS:
            return { loading: false, success: true, quest: action.payload }

        case QUEST_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case QUEST_UPDATE_RESET:
            return { quest: {} }

        default:
            return state
    }
}


