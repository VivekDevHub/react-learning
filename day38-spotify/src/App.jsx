import React from 'react'
import Router from './app/router/Router'
import { Provider } from 'react-redux'
import store from './app/store/Store'
import Toaster from './shared/ui/jsx/Toaster'

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <Toaster />
    </Provider>
  )
}

export default App
