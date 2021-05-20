import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components'

const MyApp = styled.body`
  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700');
    margin: 0;
    padding: 0;
    font-family: "Quicksand", sans-serif;
    font-size: 62.5%;
    font-size: 10px;
    width: 100%;
    height:100%;
`;

const Footer = styled.footer`
  background-color:black;
`;

function App() {
  return (
    <MyApp>
      <Router>
        <Navbar />      
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Homepage></Homepage>
        </Route>
      
      </Switch>
      <Footer />
    </Router>
  </MyApp>

  );
}

export default App;
