# Magic Translate Vue Example App

This is an example Vue app with Magic Translate integrated. You can see this
app deployed here:
https://magic-translate.github.io/magic-translate-example-vue/

## Getting Started

First create a Magic Translate account at https://magictranslate.io/signin to
obtain your API key. No credit card is required for the Free plan.

Then copy your API key and set it in a `.env` file:

```bash
# .env

VITE_MAGIC_TRANSLATE_API_KEY=<your API key>
```

Then, install the dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the
result.

You can start editing the page by modifying `src/App.vue`. The page
auto-updates as you edit the file.

The website's content is now automatically translated in your desired language.

## How it works

Magic Translate is set up once in `src/main.ts`:

```ts
app.use(createMagicTranslate({ apiKey, language: Language.EN }));
```

Any text or HTML inside a `<T>` component is translated:

```vue
<T>Get started with</T>
```

`src/components/Greeting.vue` translates the input's placeholder with
`useTranslate`, and re-translates a sentence while you type your name.

The language switcher (`src/components/LanguageSwitcher.vue`) uses
`useLanguageSwitcher` to change the language.

## Learn More

To learn more about Magic Translate please visit
[https://magictranslate.io](https://magictranslate.io), and see the
[@magic-translate/vue](https://www.npmjs.com/package/@magic-translate/vue)
package for the full API.

## Deploy on GitHub Pages

`.github/workflows/deploy.yml` builds the app and deploys it to GitHub Pages on
every push to `main`. It reads the API key from the `MAGIC_TRANSLATE_API_KEY`
repository variable. The key ends up in the public JavaScript, as with any
client-side Magic Translate integration.
