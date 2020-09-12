import axios from 'axios';
import { BEARER_KEY } from '@env';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${BEARER_KEY}`
    }
});