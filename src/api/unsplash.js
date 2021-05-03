import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
            'Client-ID lxHO58eDUqLHucOCIMslcJrZedxap6YnJPT9CAyR4Bc'
    }
});