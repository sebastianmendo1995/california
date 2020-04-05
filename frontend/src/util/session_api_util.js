import axios from 'axios';

export const setAuthToken = token => {
    if(token){
        axios.defaults.headers.common['Authorization'] = toke;
    }  else {
        delete axios.defaults.headers.common['Authorization'];
    }
}