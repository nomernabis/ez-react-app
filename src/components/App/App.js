import React from "react"
import { hot } from "react-hot-loader"

import "./App.scss"

let App = () => <div className="app">XEP</div>

App = hot(module)(App)

export { App }