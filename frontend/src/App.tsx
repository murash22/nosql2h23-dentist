// import { useState } from 'react'
import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Router/AppRouter.tsx";
import {Provider} from "react-redux";
import store from "./Store";


function App() {

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
