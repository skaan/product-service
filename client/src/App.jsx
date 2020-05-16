import * as React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { HomeView } from './views/HomeView'
import { AboutView } from './views/AboutView'

export const App = () => {
  const input = useSelector(state => state.input)
  const dispatch = useDispatch()

  const onChangeInput = (e) => {
    dispatch({ type: "INPUT_CHANGED", payload: e.target.value })
  }

  return (
    <BrowserRouter>
      <div>
        <input value={input} onChange={onChangeInput} />
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