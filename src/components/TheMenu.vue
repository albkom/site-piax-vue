<script setup lang="ts">
// @ Stores
import { useCommonStore } from '@/common/common'
const { goTo, scrollToPosition } = useCommonStore()
import { useMenuStore } from '@/routes/menu'
const { hideMenu } = useMenuStore()
</script>

<template>
  <div id="menu" class="flx-x left top back-complement">
    <div class="flx-x row between pad">
      <span class="txt--s">
        GG Impianti e Costruzioni Srl
      </span>
      <button class="" @click="hideMenu()" aria-label="Chiudi menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12l-4.95-4.95 1.414-1.414L12 10.586z"/>
        </svg>
      </button>
    </div>
    <div class="flx left pad">
      <!-- <span>Menu</span> -->
      <ul class="">
        <li class="txt--left">
          <a href="#" @click.prevent="scrollToPosition('section-BAG')">Bagni</a>
        </li>
        <li class="txt--left">
          <a href="#" @click.prevent="scrollToPosition('section-CUC')">Cucine</a>
        </li>
        <li class="txt--left">
          <a href="#" @click.prevent="scrollToPosition('section-ILL')">Illuminazioni</a>
        </li>
        <li class="txt--left">
          <a href="#" @click.prevent="scrollToPosition('section-PAV')">Pavimenti e parquet</a>
        </li>
        <li class="txt--left">
          <a href="#" @click.prevent="scrollToPosition('section-RIS')">Ristrutturazioni</a>
        </li>
        <li class="txt--left">
          <a href="#" @click.prevent="scrollToPosition('section-SAL')">Salotti</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#menu {
  background-color: var(--light);
  color: var(--dark);
}
#menu a {
  color: var(--darker);
  /* text-decoration: none; */
}
#menu {
  transition: transform 0.3s ease-in-out;
}
</style>
