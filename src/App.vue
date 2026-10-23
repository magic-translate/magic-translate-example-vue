<script setup lang="ts">
import GetStarted from './components/GetStarted.vue';
import Greeting from './components/Greeting.vue';
import LandingPageLinks from './components/LandingPageLinks.vue';
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import Logo from './components/Logo.vue';
</script>

<template>
  <main class="p-8 gap-8 flex flex-col justify-between min-h-screen max-w-6xl mx-auto">
    <GetStarted>
      <T>Get started with</T>&nbsp;
      <code class="font-mono font-bold inline">npm i @magic-translate/vue</code>
    </GetStarted>

    <LanguageSwitcher />

    <Logo />

    <Greeting />

    <LandingPageLinks />
  </main>
</template>
