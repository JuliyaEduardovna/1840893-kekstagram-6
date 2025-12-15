import { generatePosts } from './data.js';
import { renderThumbnail } from './render-thumbnails.js';
import { initScale } from './scale.js';
import { initEffects } from './effects.js';

renderThumbnail(generatePosts());
initScale();
initEffects();
