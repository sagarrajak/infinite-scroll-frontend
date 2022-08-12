import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <AppRouter></AppRouter>
    </QueryClientProvider>
  );
}

export default App;
