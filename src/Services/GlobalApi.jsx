import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='d1d17899e982d7b74b60094e45b972ec'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=d1d17899e982d7b74b60094e45b972ec';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}