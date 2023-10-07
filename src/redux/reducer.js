

import { GET_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

const initialState = {

  myFavorites: [],
  allCharacters: [],

}

const reducer = (state = initialState, { type, payload }) => {



  switch (type) {

    case ADD_FAV:

      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,

      }

    case REMOVE_FAV:

      return {

        ...state,
        myFavorites: payload,
        allCharacters: payload,
      }

    case GET_FAV:

      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      }

    case FILTER:
      const allCharactersFiltered = state.allCharacters.filter(character => character.gender === payload);
      return {

        ...state,
        myFavorites:
          payload === 'allCharacters'
            ? [...state.allCharacters]
            : allCharactersFiltered,


      }

    case ORDER:
      let allCharactersCopy = [...state.myFavorites];
      return {
        ...state,
        myFavorites:
          payload === 'A' ? allCharactersCopy.sort((a, b) => a.name.localCompare(b.name)) :
            allCharactersCopy.sort((a, b) => b.name.localCompare(a.name)),
      }

    default:
      return { ...state };
  }

}

export default reducer;