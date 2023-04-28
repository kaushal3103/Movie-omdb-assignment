
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import MovieDetails from './components/MovieDetails';
const App =()=>(
  <Router>
    <Routes>     
       <Route path="/" element={<SearchPage />} />
       <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  </Router>
  
)

export default App;
