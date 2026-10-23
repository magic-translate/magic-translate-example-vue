<script setup lang="ts">
import { useLanguageSwitcher } from '@magic-translate/vue';
import { languages } from '../config';

const { currentLanguage, setLanguage } = useLanguageSwitcher();
</script>

<template>
  <div class="flex justify-center">
    <ul
      class="flex flex-col sm:flex-row items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <li
        v-for="(name, language) in languages"
        :key="language"
        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r last:border-0 dark:border-gray-600"
      >
        <label class="flex items-center px-3 py-3 gap-2 cursor-pointer">
          <input
            type="radio"
            name="language"
            class="w-4 h-4 accent-blue-600"
            :checked="language === currentLanguage"
            @change="setLanguage(language)"
          />
          {{ name }}
        </label>
      </li>
    </ul>
  </div>
</template>
