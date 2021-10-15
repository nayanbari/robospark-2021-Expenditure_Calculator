import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TopSection from './components/TopSection';
import Table from './components/Table';
import History from './components/History';
import Home from './components/Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/history" component={History} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
