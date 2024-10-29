import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Memorize } from './05-memos/Memorize';
// import { MemoHook } from './05-memos/MemoHook';
// import { CallbackHook } from './06-useCallback/CallbackHook';
import { Parent } from './07-homework-memo/parent';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Parent />
  </StrictMode>
);
