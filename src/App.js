import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import TabsPage from './containers/TabsPage';
import TablePage from './containers/TablePage';
import ModalPage from './containers/ModalPage';
import Home from './containers/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/tabs">
          <TabsPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
