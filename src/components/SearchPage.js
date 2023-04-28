import React,{useState} from "react";
import axios from 'axios';
import { Link} from "react-router-dom";

const SearchPage = ()=>{
  const [genre, setGenre] = useState('');
  const [movies, setMovies] = useState([]);
  var API_KEY = 'daa890be';
  const [pagenum,setPagenum] = useState(0);
  
  const searchMovies = async()=>{
    try{
        const res = await axios.get(`https://www.omdbapi.com/?s=${genre}&type=movie&apikey=${API_KEY}&page=${pagenum+ 1}`);
        setMovies(res.data.Search || []);
    }catch(error){
        console.log(error);
    }
  }
  
  const nextpage = (e)=>{
    e.preventDefault();
    setPagenum(pagenum+1);
     searchMovies();
  }
  

  return (
    <> 
      <div className="wrapper">
        <h1 className="title">Movie Search</h1>
        <input type="text" value ={genre} onChange={(e)=>setGenre(e.target.value)} placeholder="Enter Genre" className="input" />
        <button onClick={searchMovies} className="searchbtn">Search</button>
        <div className="moviesearch">
            {
                movies.map((movie,id)=>(
                    
                    <div key={id} className="singlemovie">
                     <h3 className="movie-title">{movie.Title}</h3>
                    
                     <img src ={movie.Poster} alt = {movie.Title} className="img-poster"/>
                      <br/>
                     <Link to = {`/movie/${movie.imdbID}`} className="moviedetailslink">
                        Show More
                     </Link>                 
                    </div>
                    ))
                 
            }
                     
        </div>
         <div className="next-page">
             {
                   movies.length > 1 &&  <button onClick={nextpage} className="searchbtn">Next Page</button>
             }
            </div>
            <br/>
    </div>
    </>
  )
}

export default SearchPage ;