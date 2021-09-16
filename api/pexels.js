
import axios from 'axios';

const client = '563492ad6f91700001000001824986983747436eaf072ed0238a4158';

export const getImages = async (searchTerm = "technology") =>{
    try {
        return await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers: {
          Authorization: "563492ad6f91700001000001824986983747436eaf072ed0238a4158"
        },
      });
        
    } catch (error) {
        console.log({error});

        return error;
    }
}
