import './App.css';
import Layout from './layout/layout';
import Search from './views/search';
import Details from './views/details';
import Results from './views/results';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' index element={<Search/>}></Route>
          <Route path="/items">
            <Route index element={<Results/>}/>
            <Route path=':id' element={<Details/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
