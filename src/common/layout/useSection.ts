import { onMounted } from 'vue';

export function useSection(onEnter: () => Promise<void>) {
  if (typeof onEnter !== 'function') {
    throw new Error('onEnter must be a function.');
  }

  onMounted(() => {
    // Entering animation
    onEnter();
  });
}
