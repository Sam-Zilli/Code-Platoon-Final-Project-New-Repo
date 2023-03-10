import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Done_listScreen from './screens/Done_listScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';



function App() {
  return (
    <Router>
      <Header />
      {/* py 1-5 is the amount of padding */}
      <main className="py-5">
        <Container>
          {/* URL Routing done here. Solved bug w/ routes */}
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/done_list' element={<Done_listScreen />} />
            <Route path='/done_list/:id' element={<Done_listScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;