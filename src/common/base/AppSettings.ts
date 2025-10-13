import { AppPalette } from './AppPalette';

export class AppSettings {
  isPostProcessingEnabled: boolean = false;
  isBackgroundMotionEnabled: boolean = false;
  timeToHome: number = 1000; // 1 second
  palette: AppPalette = new AppPalette();
}
