import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer jN5E1Pzqia3vIXCAIov1E64I7TaDaUNpwKrHVtFFBjZPm2yW9DegQQQFIYCbPlp_p3JG2lzGijU9nBJLIF04wbF1DXdFBs4Lkw2W2g2Zs-_ZtQitBDHfIoGDkhgdX3Yx'
    }
});