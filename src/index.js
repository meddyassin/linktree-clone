import * as ReactDOMClient from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./contexts/authContext";
import { DataContextProvider } from "./contexts/dataContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <AuthContextProvider>
        <DataContextProvider>
          <ChakraProvider>
           <App />
          </ChakraProvider>
        </DataContextProvider>
      </AuthContextProvider>
    </Router>
);
