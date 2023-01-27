import React from "react";
import ReactDOM from "react-dom";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

import "./styles/index.css";
import { UIContextProvider } from "@context/UIContext/UIContextProvider";


const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      
      <UIContextProvider>
       <App />
      </UIContextProvider>
     
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
