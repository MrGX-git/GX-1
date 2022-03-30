
import axios from 'axios'

import { API_BASE_URL } from './config'

axios.defaults.baseURL = API_BASE_URL

export const loginAsync = async( data ) => {
    try {
        const response = await axios.get('/login', data)
        return response.data
    } catch (e) {
        console.log('__loginAsync__Error', e)
        return null
    }
}
export const registerAsync = async( data ) => {
    try {
    } catch (e) {
        console.log('__registerAsync__Error', e)
        return null
    }
}