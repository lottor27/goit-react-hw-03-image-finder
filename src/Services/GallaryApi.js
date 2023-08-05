import ErrorInfo from "components/Error/Errorinfo";

export const fetchGallary = async (searchText, page=1)=>{

const API_KEY ='36855700-0761bb165bd5f28ed0a2548b9'
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY }&q=`

const URL = `&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`;


const response = await fetch(`${BASE_URL}${searchText}${URL}&page=${page}`)
    if (response.ok) {
      return response.json();
    }
    return await Promise.reject(new ErrorInfo(`NO image ${searchText}`))}
  
    export default  fetchGallary ;