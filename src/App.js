import './App.css';
import Search from './views/search';
import Details from './views/details';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Search/>}></Route>
        <Route path='/items/:id”' element={<Details/>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
