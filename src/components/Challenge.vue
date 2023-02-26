<script setup lang="ts">
import game from "./challenge";
import { ref} from "vue"

const words = ref<{ from: 'Giant' | 'Hero', sentence: string }[]>([])

game.onHeroTalk(sentence => {
  words.value = [...words.value, {from: 'Hero', sentence}]
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });})
game.onGiantTalk(sentence => {
  if(sentence === "Bonjour à toi aventurier !") {
    words.value = []
  }

  words.value = [...words.value, {from: 'Giant', sentence}]
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
})

game.start()
</script>

<template>
  <img src="/giant.jpeg" />
  <p v-for="word in words" :style="{fontWeight: word.from === 'Hero' ? 'normal' : 'bold'}">
    {{ word.from}}: {{word.sentence}}
  </p>
</template>

<style scoped>

body {

}
</style>
