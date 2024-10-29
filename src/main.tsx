import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FocusScreen />
  </StrictMode>
);
