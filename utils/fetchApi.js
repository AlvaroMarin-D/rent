import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async(url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '936730e1dfmshdf7fb0931e882c3p191818jsnf72c61b0eaee',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          } 
    });

    return data;
}