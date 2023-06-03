import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'
const initState = {
    sideDrawerOpen: false, 
    openReviewModal: false,
    counter: 0
}
const reducerFn = (state = initState , action) => {
    console.log(action)
    if(action.type === 'INC'){
     return { ...state, counter: state.counter + 1}
    }
    if(action.type === 'TOGGLE_DRAWER'){
        return { ...state, sideDrawerOpen: !state.sideDrawerOpen}
    } 
    if(action.type === 'TOGGLE_REVIEW_MODAL'){
        return { ...state, openReviewModal: !state.openReviewModal}
    } 
    return state
}

const fetchUsers = () => {
    return function(dispatch) { 
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
        })
        .catch(e => {

        })
    }
}

const store = createStore(reducerFn, applyMiddleware(thunk))
store.dispatch(fetchUsers())
export default store