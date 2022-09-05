import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Admin } from './layouts/Admin';
import { Routes } from './routes';

export function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Admin>
          <Routes />
        </Admin>
      </MantineProvider>
    </BrowserRouter>
  );
}
