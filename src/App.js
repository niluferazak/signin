
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Details from './components/Details';
import Password from './components/Password';
import Teams from './components/Teams';
import Social from './components/Social';
// import Completed from './components/Completed';

function App() {
  return (
    <div className='container'>
    <div className="App">
      <Sidebar/>

      <Routes>
        <Route exact path='/details' element={<Details/>}/>
        <Route exact path='/password' element={<Password/>}/>
        <Route exact path='/teams' element={<Teams/>}/>
        <Route exact path='/socials' element={<Social/>}/>
        
      </Routes>


    </div>
    {/* <Routes>
    <Route exact path='/completed' element={<Completed/>}/>
    </Routes> */}
    
    </div>
  );
}

export default App;
