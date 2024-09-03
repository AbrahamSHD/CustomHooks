// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import { MainApp } from './09-useContext/MainApp';
// import { MultipleCustomHook } from './03-examples';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <StrictMode> */}
      <MainApp />
    {/* </StrictMode>, */}
  </BrowserRouter>
)
