
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound/NotFound';
import ContextProvider from './components/Context/ContextProvider';
import PrivateLoginRoute from './components/PrivateLoginRoute/PrivateLoginRoute'
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateLoginRoute path="/register">
              <Register></Register>
            </PrivateLoginRoute>
            <PrivateLoginRoute path="/login">
              <Login></Login>
            </PrivateLoginRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </ContextProvider>

    </div>
  );
}

export default App;
