import Homepage from './pages/Homepage'
import Experience from './pages/Experience'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'

import ProjectPage from './pages/ProjectPage'
import Contact from './pages/Contact'

import './App.css'

const MyApp = styled.body`
    margin: 0 !important;
    padding: 0 !important;
    font-family: "Quicksand", sans-serif;
    font-size: 62.5%;
    font-size: 10px;
    width: 100%;
    height:100%;
`;


function App() {
  return (
    <MyApp>
      <Router>
        <Navbar />      
      <Switch>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/project/:id" children={<ProjectPage />}>
        </Route>
        <Route path="/contact" children={<Contact />}>

        </Route>
        <Route path="/">
          <Homepage></Homepage>
        </Route>
      </Switch>
    </Router>
  </MyApp>

  );
}

export default App;
