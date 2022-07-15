import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Routes>
          <Route path={'/'} element={<h1>Hello World</h1>} />
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
}
