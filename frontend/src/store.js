// ADDED
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,

} from './reducers/productReducers'

import { done_listReducer } from './reducers/done_listReducers'

import {
    userLoginReducer,
    userRegisterReducer,
// //     userDetailsReducer,
// //     userUpdateProfileReducer,
// //     userListReducer,
// //     userDeleteReducer,
// //     userUpdateReducer,
} from './reducers/userReducers'

// // import {
// //     orderCreateReducer,
// //     orderDetailsReducer,
// //     orderPayReducer,
// //     orderListMyReducer,
// //     orderListReducer,
// //     orderDeliverReducer,
// // } from './reducers/orderReducers'

 const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,

    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,

    done_list: done_listReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
//     // userDetails: userDetailsReducer,
//     // userUpdateProfile: userUpdateProfileReducer,
//     // userList: userListReducer,
//     // userDelete: userDeleteReducer,
//     // userUpdate: userUpdateReducer,

//     // orderCreate: orderCreateReducer,
//     // orderDetails: orderDetailsReducer,
//     // orderPay: orderPayReducer,
//     // orderListMy: orderListMyReducer,
//     // orderList: orderListReducer,
//     // orderDeliver: orderDeliverReducer,
 })


const done_listItemsFromStorage = localStorage.getItem('done_listItems') ?
    JSON.parse(localStorage.getItem('done_listItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

    const initialState = {
        done_list: {
            done_listItems: done_listItemsFromStorage,
        },
    userLogin: { userInfo: userInfoFromStorage },
    }

    const middleware = [thunk]

    const store = createStore(reducer, initialState,
        composeWithDevTools(applyMiddleware(...middleware)))



    export default store