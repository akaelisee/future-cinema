import { Provider } from 'react-redux'
import './App.css'
import Routes from './config/router'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './config/store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes></Routes>
      </PersistGate>
    </Provider>
  )
}

export default App
