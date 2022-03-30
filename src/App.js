import {BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./components/layout/Layout";

//pages
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetups";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Layout>
          <Switch>
            <Route path="/" exact>
              <AllMeetups />
            </Route>
            <Route path="/new-meetup" exact>
              <NewMeetups />
            </Route>
            <Route path="/favorites" exact>
              <Favorites />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
