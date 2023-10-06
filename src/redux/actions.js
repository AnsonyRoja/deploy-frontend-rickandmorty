import { GET_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";
import axios from 'axios';


export const getFav = () => {


    const endpoint = 'https://servidor-rickandmorty-pwak.onrender.com/rickandmorty/fav';

    return async (dispatch) => {

        try {

            const { data } = await axios.get(endpoint);

            if (!data.length) throw Error('No Found Character Favorite');

            return dispatch({

                type: GET_FAV,
                payload: data,

            });

        } catch (error) {

            console.log(error.message);

        }
    }

}

export const addFav = (character) => {

    const endpoint = 'https://servidor-rickandmorty-pwak.onrender.com/rickandmorty/fav';
    return async (dispatch) => {

        try {


            const { data } = await axios.post(endpoint, character);

            if (!data.length) throw Error('No Found Character Favorite');

            return dispatch({

                type: ADD_FAV,
                payload: data,

            });

        } catch (error) {

            console.log(error.message);

        }


    };

}

export const removeFav = (id) => {

    const endpoint = `https://servidor-rickandmorty-pwak.onrender.com/rickandmorty/fav/${id}`;

    return async (dispatch) => {

        try {

            const { data } = await axios.delete(endpoint);

            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });

        } catch (error) {

            console.log(error.message);

        }



    };


}


export const filterCards = (gender) => {

    return { type: FILTER, payload: gender };

}

export const orderCards = (order) => {

    return { type: ORDER, payload: order };
}

