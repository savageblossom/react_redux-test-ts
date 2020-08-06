import {SystemState} from '../types';

import {FETCH_DATA, CHANGE_PAGE} from '../constants';

const initialState: SystemState = {
    currentPage: 1,
    swapi_data: {
        count: 0,
        results: []
    }
};

const reducer = (state = initialState, action: any) =>  {
    const newState = {...state};

    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                swapi_data: {
                    ...action.payload
                }
            }
        case CHANGE_PAGE:
                // action.payload[0] -> operation
                // action.payload[1] -> number
            if(action.payload[0] === 'ADD') {
                return {
                    ...state,
                    currentPage: state.currentPage + action.payload[1],
                }
            }
            else if(action.payload[0] === 'SUBSTR') {
                return {
                    ...state,
                    currentPage: state.currentPage - action.payload[1] <= 0 
                        ? state.currentPage
                        : state.currentPage - action.payload[1],
                }
            }
            else { 
                return newState;
            }
        default: 
            return newState;
    }
};

export default reducer;