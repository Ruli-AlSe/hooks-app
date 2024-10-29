import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp';

import './index.css';
import { SimpleForm } from './02-useEffect/SimpleForm';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SimpleForm />
  </StrictMode>
);
