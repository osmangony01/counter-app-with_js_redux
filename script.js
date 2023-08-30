
// select dom element
const counterEL = document.querySelector('#counter');
const incrementEL = document.querySelector("#increment");
const decrementEL = document.querySelector("#decrement");


// action identifier
const INCREMENT = 'increment';
const DECREMENT = 'decrement';


// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}

// initial state
const initialState = {
    value: 0
}

// create reducer function
const counterReducer = (state=initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        }
    }
    else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        }
    }
    else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEL.innerText = state.value;
}

// update UI initially
render();

store.subscribe(render);

incrementEL.addEventListener("click", (e) => {
    store.dispatch(increment(5));
})

decrementEL.addEventListener("click", (e) => {
    store.dispatch(decrement(2));
})