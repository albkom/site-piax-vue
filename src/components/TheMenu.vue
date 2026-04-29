<script setup lang="ts">
// @ Stores
import { storeToRefs } from 'pinia'
import { useContentsStore } from '@/stores/contents'
const { toggleTexts } = useContentsStore()
const { areTextsHidden } = storeToRefs(useContentsStore())
import { useNavigationStore } from '@/stores/navigation'
const { scrollToPosition } = useNavigationStore()
import { useMenuStore } from '@/stores/menu'
const { hideMenu } = useMenuStore()
</script>

<template>
  <div id="menu" class="flx-x left top back-complement">
    <div class="menu-header pad">
      <div class="menu-brand">
        <span class="menu-brand-name">GG Impianti e Costruzioni Srl</span>
      </div>
      <button class="close-btn" @click="hideMenu()" aria-label="Chiudi menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12l-4.95-4.95 1.414-1.414L12 10.586z"
          />
        </svg>
      </button>
    </div>

    <nav class="flx left pad menu-nav">
      <ul>
        <li><a href="#" @click.prevent="scrollToPosition('section-BAG')">Bagni</a></li>
        <li><a href="#" @click.prevent="scrollToPosition('section-CUC')">Cucine</a></li>
        <li><a href="#" @click.prevent="scrollToPosition('section-ILL')">Illuminazioni</a></li>
        <li><a href="#" @click.prevent="scrollToPosition('section-PAV')">Pavimenti e parquet</a></li>
        <li><a href="#" @click.prevent="scrollToPosition('section-RIS')">Ristrutturazioni</a></li>
        <li><a href="#" @click.prevent="scrollToPosition('section-SAL')">Salotti</a></li>
      </ul>
    </nav>

    <div class="menu-footer pad">
      <div class="toggle-row" @click="toggleTexts">
        <div class="toggle-info">
          <span class="toggle-text">Mostra descrizioni</span>
          <span class="toggle-hint">Disabilita per sfogliare solo le immagini</span>
        </div>
        <div class="ios-toggle" :class="{ on: !areTextsHidden }">
          <div class="ios-thumb"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#menu {
  background-color: rgba(10, 10, 14, 0.92);
  color: var(--dominant);
  transition: transform 0.3s ease-in-out;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

@supports (backdrop-filter: blur(1px)) {
  #menu {
    background-color: rgba(10, 10, 14, 0.65);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 4px 0 32px rgba(0, 0, 0, 0.4);
  }
}

.menu-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.menu-brand {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.menu-brand-name {
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.04em;
  color: var(--dominant);
  white-space: normal;
  word-break: break-word;
}

.close-btn {
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  color: #fff;
  opacity: 0.6;
  transition: opacity 0.2s;
  line-height: 0;
}
.close-btn:hover { opacity: 1; }
.close-btn svg {
  width: 1.25rem;
  height: 1.25rem;
  fill: #fff;
  display: block;
}

.menu-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.menu-nav li {
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.menu-nav a {
  display: block;
  padding: 0.65rem 0;
  color: var(--dominant);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: color 0.15s, padding-left 0.15s;
}
.menu-nav a:hover {
  color: var(--highlight);
  padding-left: 0.4rem;
}

.menu-footer {
  width: 100%;
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-top: auto;
}

.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 0.75rem;
}

.toggle-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  text-align: left;
}

.toggle-text {
  font-size: 0.8rem;
  color: var(--complement);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  user-select: none;
}

.toggle-hint {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.35);
  user-select: none;
  line-height: 1.3;
}

.ios-toggle {
  position: relative;
  width: 2.4rem;
  height: 1.3rem;
  border-radius: 1rem;
  background-color: rgba(255,255,255,0.15);
  transition: background-color 0.25s ease;
  flex-shrink: 0;
}
.ios-toggle.on {
  background-color: var(--highlight);
}
.ios-thumb {
  position: absolute;
  top: 0.15rem;
  left: 0.15rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.25s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
.ios-toggle.on .ios-thumb {
  transform: translateX(1.1rem);
}
</style>
