import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import { nextTick, watch } from 'vue';
import './custom.css';

const viewerId = 'manual-image-viewer';

function installManualShotViewer() {
  let viewer: HTMLDialogElement | undefined;
  let previousFocus: HTMLElement | null = null;

  const close = () => viewer?.close();
  const open = (image: HTMLImageElement) => {
    if (!viewer) return;
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const fullSizeImage = viewer.querySelector('img');
    if (fullSizeImage) {
      fullSizeImage.src = image.currentSrc || image.src;
      fullSizeImage.alt = image.alt;
    }
    viewer.showModal();
    viewer.querySelector<HTMLButtonElement>('button')?.focus();
  };
  const bind = () => {
    document.querySelectorAll<HTMLImageElement>('img.manual-shot').forEach((image) => {
      if (image.dataset.viewerBound) return;
      image.dataset.viewerBound = 'true';
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.addEventListener('click', () => open(image));
      image.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open(image);
        }
      });
    });
  };

  viewer = document.createElement('dialog');
  viewer.id = viewerId;
  viewer.className = 'manual-image-viewer';
  viewer.setAttribute('aria-label', 'Image viewer');
  viewer.innerHTML = '<button type="button" aria-label="Close image viewer">Close</button><div><img alt="" /></div>';
  viewer.querySelector('button')?.addEventListener('click', close);
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) close();
  });
  viewer.addEventListener('close', () => previousFocus?.focus());
  document.body.append(viewer);
  bind();

  return {
    bind,
    dispose() {
      viewer?.remove();
      viewer = undefined;
    }
  };
}

export default {
  ...DefaultTheme,
  enhanceApp(context) {
    DefaultTheme.enhanceApp?.(context);
    if (import.meta.env.SSR) return;
    const controller = installManualShotViewer();
    const bindAfterRender = () => nextTick(() => controller?.bind());
    watch(() => context.router.route.path, bindAfterRender);
    window.addEventListener('pagehide', () => controller.dispose(), { once: true });
  }
} satisfies Theme;
