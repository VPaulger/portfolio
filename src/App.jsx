import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Clouds from './components/Clouds';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Clouds />
      <Router>
        <Routes>
          <Route
            path='/*'
            exact
            element={<Home />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
