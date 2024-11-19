import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css'

import App from './App.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <Router>
    <App />
  </Router>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
