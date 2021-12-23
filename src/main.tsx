import React from 'react';
import ReactDOM from 'react-dom';

import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';

import GlobalStyle from './styles/global';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Home />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
