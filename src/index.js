import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store'
import { Provider } from 'react-redux'
import SuspenseContent from './containers/SuspenseContent';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        staleTime: 5 * (60 * 1000), //5 mins
        cacheTime: 10 * (60 * 1000) //10 mins
      }
    }
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<SuspenseContent />}>
    <ToastContainer />
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </Suspense>
);

reportWebVitals();
