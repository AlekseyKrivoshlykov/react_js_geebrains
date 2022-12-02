import axios from 'axios';

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}

export const getCharactersRequest = () => ({
    type: 'GET_CHARACTERS_REQUEST',
})

export const getCharactersLoading = (data) => ({
    type: 'IS_LOADING',
    payload: data,
})

export const getCharactersSuccess = (data) => ({
    type: 'GET_CHARACTERS_SUCCESS',
    payload: data,
})

export const getCharactersFailure = (err) => ({
    type: 'GET_CHARACTERS_FAILURE',
    payload: err,
})


const getCharacters = () => ({
    type: 'GET_CHARACTERS',
})


export const getAllCharacters = () => async (dispatch) => {
    dispatch(getCharactersRequest());
    dispatch(getCharactersLoading());

    try { 
        // const response = await fetch('https://breakingbadapi.com/api/characters');
        const response = await axios.get('https://breakingbadapi.com/api/characters');
        if(response.status === 200) {
            // const data = await response.json()
            const data = await response.data;
            dispatch(getCharactersSuccess(data));
        }
    } catch (error) {
        dispatch(getCharactersFailure(error.message));
    } finally {
        dispatch(getCharactersLoading());
    }
}
