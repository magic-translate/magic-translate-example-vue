<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@magic-translate/vue';

const t = useTranslate();
const name = ref('');
</script>

<template>
  <div class="flex flex-col items-center gap-3 text-center">
    <input
      v-model="name"
      :placeholder="t('Type your name')"
      class="w-64 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
    />
    <p class="text-lg">
      <T v-if="name">Hello <b>{{ name }}</b>, nice to meet you!</T>
      <T v-else>Type your name and watch this sentence being translated as you type.</T>
    </p>
  </div>
</template>
