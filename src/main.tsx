import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, getInitialLocale } from './context/LanguageContext';
import { defaultLocale, loadLocale } from './data/portfolioData';
import './styles/index.css';

const render = async () => {
  const requested = getInitialLocale();
  // Resolve the dictionary before the first render so a non-default language never flashes Georgian first.
  const [locale, content] = await loadLocale(requested)
    .then((c) => [requested, c] as const)
    .catch(async () => [defaultLocale, await loadLocale(defaultLocale)] as const);

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <LanguageProvider initialLocale={locale} initialContent={content}>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
};

void render();
