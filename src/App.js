import Header from './components/Header';
import Showcase from './components/Showcase';
import Model from './components/Model';
import Story from './components/Story';
import Spotlight from './components/Spotlight';
import Features from './components/Features';
import Blob from './components/Blob';
import Shoes from './components/Shoes.js'
import About from './components/About';
import Footer from './components/Footer';
import Blog from './components/Blog';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="container">
      <Routes>
        <Route
          path='/'
          element={
          <>
          <Header/>
          <Showcase />
          <Model />
          <Story />
          <Spotlight />
          <Features />
          <Blob />
          <Shoes />
          <Footer />
          </>
          }
          />
      </Routes>
     <Routes>
      <Route path='about' element={<About />} />
     </Routes>
     <Routes>
       <Route path='blog' element={<Blog />} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
