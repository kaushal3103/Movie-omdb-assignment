import { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router";
import { Link} from "react-router-dom";
const MovieDetails = ()=>{
    const [details,setDetails] = useState(null);
    var API_KEY = 'daa890be';
    const {id} = useParams();

    useEffect(()=>{
       const fetchDetails = async()=>{
        
        try{
           const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
           setDetails(res.data);
        }catch(error){
            console.log(error);
        }
        
    }
    fetchDetails();
    },[id,API_KEY])
   
   
    
    return (
        <div>
             <h2 style={{textAlign:'center',fontSize:'50px',color:'#00008B'}}>Details</h2>
           

            {
                              
                details && (
                    
                    <div className="movie-details">
                       
                        <div className="head">
                       
                       
                       <img src ={details.Poster} alt = {details.Title} style={{height:'400px',border:'3px solid #00008B'}} /> 
                       </div>
                       <div className="info">
                        <h4 style={{fontSize:'30px',marginTop:'0px'}}>{details.Title}</h4>                  
                       <p><b>Genre: </b>{details.Genre}</p>
                       <p><b>Released At: </b>{details.Released}</p>
                       <p><b>Rated: </b>{details.Rated}</p>
                       <p><b>Director: </b>{details.Director}</p>
                       <p><b>Writer :</b>{details.Writer}</p>
                       <p><b>Actors: </b>{details.Actors}</p>
                       <p style={{width:'60%'}}><b>Plot: </b>{details.Plot}</p>
                       </div>
                      

                    </div>
                )
                
}                     <div className="next-page1">
                       <Link to = '/' className="searchbtn1">
                        Go Back
                       </Link>
    </div>  
                    
                            
</div>
        
    )
}

export default MovieDetails;