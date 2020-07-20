import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5f4cf8ce7f5fb1d4b6d795dcd4d1e912ae465a0049a0b7ae0f6a3af11b4f6517'
    }
});
