import type { AppSettings } from './common/base/AppSettings';
import type { Dictionary } from './common/utils/utils';

const basil = "#52aC30" // 9ADF80 70C451 388F18 206D03 (paletton positive design)
const basilDark = "#206D03"
const black = "#1A2305"

export const settings: AppSettings = {
  isPostProcessingEnabled: false,
  isBackgroundMotionEnabled: false,
  timeToHome: 1000, // 1 second
  palette: {
    dominant: '#231F20',
    complement: '#263238',
    action: '#2D6987',
    highlight: '#263238',
    text: '#f5f5f5',
    danger: '#fa0a0a',
  },
}

// Correlation between animations and routes
const animations: Dictionary = {
  home: 'home',
  menu: 'menu',
  example: 'content',
  dashboard: 'content',
  about: 'content',
}

class AppConfig {
  static settings = settings;
  // Correlation between animations and routes
  static animations = animations;
}

export default AppConfig;
