
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <Sidebar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
