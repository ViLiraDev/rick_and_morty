import { ADD_FAV, REMOVE_FAV , FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allFavorites: []
}


const reducer = (state = initialState, { type, payload }) => {
    switch( type ){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allFavorites, payload],
                allFavorites: [...state.allFavorites, payload]

            }

        case REMOVE_FAV: 
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }
        case FILTER :
            const allCharacteresFiltered = state.allFavorites.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites:
                payload === 'allCharacters'
                ? [...state.allFavorites]
                : allCharacteresFiltered
            }


        case ORDER:
            const allFavoritesCopy = [...state.allFavorites]
            return{
                ...state,
                myFavorites: 
                    payload === 'A'
                    ? allFavoritesCopy.sort((a,b) => a.id - b.id)
                    : allFavoritesCopy.sort((a,b) => b.id - a.id)
            }
        default:
            return {...state}
    }
}


export default reducer;