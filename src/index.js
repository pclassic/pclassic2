import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/merriweather-sans';
import '@fontsource/lato';
import '@fontsource/arvo/700.css';
import '@fontsource/arvo/400.css';
import '@fontsource/average-sans';

const theme = extendTheme({
  styles: {
    global: (props) => ({
        body: {
            fontFamily: `'Average Sans', sans-serif;`
        },
    }),
  },
  fonts: {
    heading: `'Arvo', serif;`,
    body: `'Average Sans', sans-serif;`,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
