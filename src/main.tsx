import { createRoot } from 'react-dom/client'

import App from './App';

const rootElement = document.querySelector('[data-js="root"]')

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
