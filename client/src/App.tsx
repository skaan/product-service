import * as React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { HomeView } from './views/HomeView'
import { AboutView } from './views/AboutView'

export class App extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <BrowserRouter>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <AboutView />
          </Route>
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}