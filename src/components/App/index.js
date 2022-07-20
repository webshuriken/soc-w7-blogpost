import './index.css';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../../auth/protected-route';
import NavBar from '../NavBar';
import Profile from '../Profile';
import Blogs from '../Blogs'


function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="profile" element={<ProtectedRoute component={Profile} />} />
          <Route path="*" element={<h2>Nothing found here</h2>} />
        </Routes>
      </main>
      <footer>Created by Carlos E Alford in association with <a href="https://www.schoolofcode.co.uk/">School of Code</a></footer>
    </>
  );
}

export default App;
