<script setup lang="ts">
// @ Stores
import { useCommonStore } from '@/common/common'
const { goTo, scrollToPosition } = useCommonStore()
import { useMenuStore } from '@/routes/menu'
const { hideMenu } = useMenuStore()
</script>

<template>
  <div id="menu" class="flx-x left top">
    <div class="flx-x row between pad">
      <span class="txt--s">
        GG Impianti e Costruzioni Srl
      </span>
      <button @click="hideMenu()">Chiudi</button>
    </div>
    <div class="flx left pad">
      <span>Menu</span>
      <ul class="">
        <li class="txt--left">
          <a href="#" @click="scrollToPosition('section-bagni')">Bagni</a>
        </li>
        <li class="txt--left">
          <a href="#" @click="scrollToPosition('section-cucine')">Cucine</a>
        </li>
        <li class="txt--left">
          <a href="#" @click="scrollToPosition('section-impianti')">Installazione impianti</a>
        </li>
        <li class="txt--left">
          <a href="#" @click="scrollToPosition('section-pavimenti')">Pavimenti e parquet</a>
        </li>
        <li class="txt--left">
          <a href="#" @click="scrollToPosition('section-ristrutturazioni')">Ristrutturazioni</a>
        </li>
        <li class="txt--left">
          <a href="#" @click="scrollToPosition('section-salotti')">Salotti</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>
