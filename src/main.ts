import { createApp } from 'vue';
import { createMagicTranslate, Language } from '@magic-translate/vue';
import App from './App.vue';
import './style.css';

const apiKey = import.meta.env.VITE_MAGIC_TRANSLATE_API_KEY;
if (!apiKey) {
  throw new Error(
    'VITE_MAGIC_TRANSLATE_API_KEY is not set. Get an API key at https://magictranslate.io and put it in a .env file.',
  );
}

createApp(App)
  .use(
    createMagicTranslate({
      apiKey,
      language: Language.EN,
      _apiUrl: import.meta.env.VITE_MAGIC_TRANSLATE_API_URL,
    }),
  )
  .mount('#app');
