
import axios from 'axios';

var client = '563492ad6f91700001000001824986983747436eaf072ed0238a4158';

export const getImages = async (searchTerm = "programing") => 
await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
        Authorization: client
    }
});
// All requests made with the client will be authenticated
