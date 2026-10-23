interface ImportMetaEnv {
  readonly VITE_MAGIC_TRANSLATE_API_KEY: string;
  readonly VITE_MAGIC_TRANSLATE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
