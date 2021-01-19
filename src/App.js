import { Container } from '@material-ui/core';

import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

import { BrowserRouter as Router, Link, Switch, Route, NavLink } from 'react-router-dom';
import './components/ParstForPage/image.sass';
import './components/ParstForPage/nav.sass';
function App() {
  return (
    <>
      <div className='bg'/>
      
      <div className='anketa'>
        <Router>
          <div className='nav-pages'>
            <NavLink to='/signIn' className='nav-link' activeClassName="active">Sign In</NavLink>
            <NavLink to='/signUp' className='nav-link' activeClassName="active">Sign Up</NavLink>
          </div>

          <Switch>
            <Route path='/signIn' component={SignIn} />
            <Route path='/signUp' component={SignUp} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
