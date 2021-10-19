
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';

import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import Services from './pages/Services/Services';

function App() {
  return (
    <div className="">
    <AuthProvider>
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
         <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        
         <Route path="/about">
          <About/>
        </Route>
         <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        
        
        
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    
    </div>
  );
}

export default App;