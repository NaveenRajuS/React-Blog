import React from 'react';
import 'D:/bOGnMCzEEeiTdA5yoE99Fg_6da6f2f02cc411e8b484f7e801bd0278_Bootstrap4-starter/Bootstrap4/conFusion/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Blog from './Blog';
import Details from './Details';

function App() {
  return (
    <>
    <h1 class ="text-center text-info mt-3"> TOP 9 VIDEO GAMES </h1>
    <Router>
      <Link to ='/Blog'> Go to Blog </Link>
      <h2 class ="text-center">
      The best video games you can play across every console available.
      </h2>

      <Route path="/Blog">
        <Blog />
      </Route>
      <Route path="/details/:id" render={props =>(
        <Details {...props} />
      )}>
     
      </Route>
      
    </Router>
   </>
  );
}

export default App;
