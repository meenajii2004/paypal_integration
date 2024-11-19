import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'rsuite/dist/rsuite.min.css'; 
import { CustomProvider } from 'rsuite'; // or 'rsuite/styles/index.less';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
