import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Error from './routes/Error';
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error errorCode={404} msg="Page Not Found"/>} />
      </Routes>
    );
  };
  export default App