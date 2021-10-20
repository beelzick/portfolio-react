import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import LoadingPage from '../src/components/LoadingPage'
const App = React.lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
