import { heros } from '@/db/db.heros'
import { images, type ImageGroup } from '@/db/db.images'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useDbStore = defineStore('db', () => {
  const hero: string = getHeroSrc()

  const services = [
    {
      id: 'BAG',
      title: 'Bagni',
      description:
        'Ristrutturazione completa di bagni, dalla progettazione alla realizzazione: interventi idraulici, sostituzione sanitari, posa piastrelle, stuccatura, coibentazione, installazione box doccia, vasche idromassaggio e soluzioni su misura per persone con mobilità ridotta.',
      cover: 'Bagni/Bagno1',
      images: getImagesSrc('BAG'),
    },
    {
      id: 'CUC',
      title: 'Cucine',
      description:
        'Realizziamo cucine su misura e ristrutturazioni complete: opere murarie, impianti idraulici ed elettrici a norma, posa rivestimenti, tinteggiatura e finiture, per una cucina funzionale e di design.',
      cover: 'Cucine/Cucina1',
      images: getImagesSrc('CUC'),
    },
    {
      id: 'ILL',
      title: 'Illuminazioni',
      description:
        'Progettazione e installazione di impianti idraulici ed elettrici civili e industriali, oltre che impianti di condizionamento certificati e a norma di legge. Manutenzione, adeguamento e riparazioni per la massima sicurezza ed efficienza.',
      cover: 'Impianti/Impianti1',
      images: getImagesSrc('ILL'),
    },
    // {
    //   id: 'pavimenti',
    //   title: 'Pavimenti e rivestimenti',
    //   description:
    //     'Posa di pavimenti in ceramica, gres porcellanato, marmo, cotto e rivestimenti a parete. Installazione e levigatura di parquet e laminati, per soluzioni durature e di grande impatto estetico.',
    //   cover: 'Pavimenti/Pavimenti1',
    //   images: getImagesSrc('Pavimenti'),
    // },
    // {
    //   id: 'ristrutturazioni',
    //   title: 'Ristrutturazioni e restauri',
    //   description:
    //     'Ristrutturazioni edili complete per appartamenti, ville e locali commerciali: opere murarie, demolizioni, nuove costruzioni, adeguamento sismico, riqualificazione energetica e rifacimento facciate.',
    //   cover: 'Ristrutturazioni/Ristrutturazioni1',
    //   images: getImagesSrc('Ristrutturazioni'),
    // },
    // {
    //   id: 'salotti',
    //   title: 'Salotti',
    //   description:
    //     'Ristrutturazione e riorganizzazione di salotti: creazione di nuove aperture, controsoffitti, posa pavimenti e rivestimenti, soluzioni illuminotecniche e finiture di pregio per un ambiente accogliente e moderno.',
    //   cover: 'Salotti/Salotto1',
    //   images: getImagesSrc('Salotti'),
    // },
  ]

  function isMobileDevice(): boolean {
    return (
      typeof window !== 'undefined' &&
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent,
      )
    )
  }

  function createImageArray(prefix: string, n: number) {
    return Array.from({ length: n }, (_, i) => `${prefix}${i + 1}`)
  }

  function getImagesSrc(category: string) {
    console.log('Getting images for category:', category)
    // Detect if screen width is less than or equal to 769px
    const isPortrait = typeof window !== 'undefined' && window.innerWidth <= 769
    const srcs: string[] = images[category][isPortrait ? 'mobile' : 'desktop']
    return srcs
    // return Array.from({ length: max }, (_, i) => `${file}${i + 1}`)
  }

  function getHeroSrc() {
    const isPortrait = typeof window !== 'undefined' && window.innerWidth <= 769
    console.log(heros[isPortrait ? 'mobile' : 'desktop'])
    return heros[isPortrait ? 'mobile' : 'desktop'][0]
  }

  function updateServiceImages() {
    services.forEach((service) => {
      service.images = createImageArray(service.cover.replace(/\d+$/, ''), 5)
    })
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      updateServiceImages()
    })
  }

  const progress = ref(0)
  const message = ref({ title: '', desc: '' })

  function updateProgress(p: number) {
    progress.value = p
  }

  const sections: HTMLElement[] = []
  onMounted(() => {
    // const sectionIds = [...images.value.map((_, i) => `img-${i}`)]
    // sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
  })

  function getElementsByY(elements: HTMLElement[], y: number) {
    for (let i = 0; i < elements.length; i++) {
      const rect = elements[i].getBoundingClientRect()
      if (rect.top <= y && rect.bottom > y) {
        return elements[i]
      }
    }
  }

  async function reloadData() {
    // await loadRecipes()
    // await loadAuthors()
  }

  return {
    progress,
    updateProgress,
    hero,
    services,
  }
})
