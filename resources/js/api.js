import axios from 'axios'


export const BASE_API_URL = 'http://127.0.0.1:8000/api/';

export const fetchQuestions = async () => {
    const questions = await axios.get(`${BASE_API_URL}`,'questions')
        .then(response => { setQuestions(response.data.data) })
        .catch(error => console.error(error))
}
