import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ModalProvider from './context/providers/ModalProvider'
import DestionationProvider from './context/providers/DestionationProvider';
import ServiceProvider from './context/providers/ServiceProvider';
import ReviewProvider from './context/providers/ReviewProvider';
import GalleryProvider from './context/providers/GalleryProvider';
import AnimationProvider from './context/providers/AnimationProvider';
import Details from './pages/Details';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
        <ModalProvider>
          <DestionationProvider>
            <ServiceProvider>
              <ReviewProvider>
                <GalleryProvider>
                  <AnimationProvider>
                    <HelmetProvider>
                      <Router>
                          <Routes>
                            <Route path='/' element={<Home/>}></Route>
                            <Route path='/about' element={<About/>}></Route>
                            <Route path='/contact' element={<Contact/>}></Route>
                            <Route path='*' element={<NotFound/>}></Route>
                            <Route path='details/:id' element={<Details/>}></Route>
                          </Routes>
                      </Router>
                    </HelmetProvider>
                  </AnimationProvider>
                </GalleryProvider>
              </ReviewProvider>
            </ServiceProvider>
          </DestionationProvider>
        </ModalProvider>
    </div>
  )
}

export default App
