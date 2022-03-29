import {BrowserRouter, Route, Switch} from "react-router-dom"

//pages
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetups";

// components
import MainNavigation from "./components/layout/MainNavigation";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation />

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
      </BrowserRouter>
    </div>
  );
}

export default App;
