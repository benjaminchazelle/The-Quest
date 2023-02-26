<script lang="ts" setup>

import game from "@/components/challenge";
import {ref} from "vue";

const ranks = ref<{ name: string, time : number, level: number }[]>([])


game.onRanks(newRanks => {
  console.log(newRanks)
  ranks.value = newRanks
})

game.start()

</script>

<template>
  <p v-for="(rank, i) in ranks">
    #{{i+1}} {{rank.name}} {{rank.level}}
  </p>
</template>



<style scoped>

</style>