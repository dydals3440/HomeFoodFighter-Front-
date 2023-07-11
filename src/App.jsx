import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Scrap from './pages/Scrap';

const App = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path='/scrap' element={<Scrap />} />
  </Routes>
);

export default App;
