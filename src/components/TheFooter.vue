<script setup lang="ts">
// @ Local
import { version } from '@/version'
import { onMounted } from 'vue'

onMounted(() => {
  const footer = document.getElementById('app-footer')
  if (footer) {
    setTimeout(() => {
      footer.style.opacity = '1'
    }, 0 * 2000)
  }
})
</script>

<template>
  <footer id="app-footer">
    <!-- <div class="overlay gradient"></div> -->
    <div class="flx-x top left gap-m z-5">
      <hr class="h-10vh" />
      <h5 class="text">Contatti</h5>
      <!-- <p><a href="https://wa.me/393206345722" target="_blank">Scrivici su WhatsApp</a></p> -->
      <div class="flx-x row left gap-s">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-1rem" viewBox="0 -960 960 960">
          <path
            d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
          />
        </svg>
        <div class="flx row left gap-m">
          <a href="tel:+393206345722">320 634 5722</a>
          <div class="txt--m">Gabriele</div>
        </div>
      </div>
      <div class="flx-x row left gap-s">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-1rem" viewBox="0 -960 960 960">
          <path
            d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
          />
        </svg>
        <div class="flx row left gap-m">
          <a href="tel:+393482421829">348 242 1829</a>
          <div class="txt--m">Giuseppe</div>
        </div>
      </div>
      <div class="flx-x row left gap-s">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-1rem" viewBox="0 -960 960 960">
          <path
            d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
          />
        </svg>
        <div class="flx row left gap-m">
          <a href="tel:+393757419490">375 741 9490</a>
          <div class="txt--m">Ufficio</div>
        </div>
      </div>
      <div class="flx-x row left gap-s">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-1rem" viewBox="0 -960 960 960">
          <path
            d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
          />
        </svg>
        <div class="flx left">
          <div class="txt--m">Via Piave 14 rosso</div>
          <div class="txt--s">Genova (GE), Italia, cap: 16145</div>
        </div>
      </div>
      <div class="flx-x row left gap-s">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-1rem" viewBox="0 -960 960 960">
          <path
            d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
          />
        </svg>
        <div class="flx left">
          <div class="txt--s">Ragione sociale</div>
          <div class="txt--m">GG Impianti e Costruzioni Srl</div>
          <div class="txt--s">P.IVA: 02917950996</div>
        </div>
      </div>
      <div class="flx-x row left gap-s">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-1rem" viewBox="0 -960 960 960">
          <path
            d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
          />
        </svg>
        <div class="flx left">
          <div class="txt--s">scrivi a</div>
          <div class="txt--s">
            <a href="ggimpiantiecostruzionisrl@gmail.com">ggimpiantiecostruzionisrl@gmail.com</a>
          </div>
        </div>
      </div>
      <hr />
      <div class="flx-x row left gap-s">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-1rem" viewBox="0 -960 960 960">
          <path
            d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z"
          />
        </svg>
        <div class="flx left">
          <div class="txt--s">versione</div>
          <div class="txt--s">{{ version }}</div>
        </div>
      </div>
      <hr class="h-10vh" />
    </div>
  </footer>
</template>

<style scoped>
#app-footer {
  background-color: var(--dominant);
  z-index: 20;
  border-top: 5pt solid var(--dominant);
}
.gradient {
  background-image: linear-gradient(to bottom, var(--dominant) 0%, transparent 10%);
}
</style>
