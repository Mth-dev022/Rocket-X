import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AppRoutes from './routes/routes.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider>
      <AppRoutes>
          <App />
      </AppRoutes>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
