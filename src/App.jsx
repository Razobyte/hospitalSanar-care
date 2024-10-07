import { Container } from 'react-bootstrap'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Suspense, useEffect, lazy } from 'react'
const BookScans=lazy(()=>import('./components/bookScans/BookScans'))
const Category = lazy(() => import('./components/bookScans/category/Category'))
const Items = lazy(()=>import('./components/bookScans/Items/Items'))
const Home = lazy(() => import('./components/home/Home'));
const Doctors = lazy(() => import('./components/doctors/Doctors'));
const Contact = lazy(() => import('./components/contactUs/Contact'));
const Health = lazy(() => import('./components/healthPackage/Health'));
const Blog = lazy(() => import('./components/blogPage/Blog'));
const HealthPackageDetail = lazy(() => import('./components/healthPackage/subPages/SubfirstPage'));
const BlogDetail = lazy(() => import('./components/blogPage/BlogDetails'));
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <>
    
      <Header />
      <Container fluid className='noscroll'>
        <Suspense fallback={<div></div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/our-doctors' element={<Doctors />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/health-package' element={<Health />} />
            <Route path='/health-package/:slug' element={<HealthPackageDetail />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/blogdetails/:slug' element={<BlogDetail />} />
            <Route path="/book-scans" element={<BookScans/>} />
            <Route path="/book-scans/:category/gurugram" element={<Category />} />
            <Route path="/book-scans/:category/:item/gurugram" element={<Items />} />
          </Routes>
        </Suspense>
        <Footer />
      </Container>
    </>
  );
}

export default App;
