import { EFFECTS } from './constants.js';

const initEffects = () => {
  const effectsList = document.querySelector('.effects__list');
  const sliderContainer = document.querySelector('.img-upload__effect-level');
  const slider = sliderContainer.querySelector('.effect-level__slider');
  const previewImg = document.querySelector('.img-upload__preview img');

  sliderContainer.classList.add('hidden');

  /* Create a new slider */

  noUiSlider.create(slider, {
    range: { min: 0, max: 100 },
    start: 100,
    step: 1,
    connect: 'lower',
  });

  /* Set a filter */

  const applyEffect = (effectName, value) => {
    const effect = EFFECTS[effectName];
    if (effect.filter) {
      previewImg.style.filter = `${effect.filter}(${value}${effect.unit})`;
    } else {
      previewImg.style.filter = '';
    }
  };

  let currentEffect = 'none';

  /* Change the filter */

  slider.noUiSlider.on('update', (values) => {
    const value = Number(values[0]);
    applyEffect(currentEffect, value);
  });

  /* Event Listener */

  effectsList.addEventListener('change', (evt) => {
    currentEffect = evt.target.value;
    const effect = EFFECTS[currentEffect];

    if (!effect.filter) {
      sliderContainer.classList.add('hidden');
      previewImg.style.filter = '';
      return;
    }

    /* Set the filter */

    sliderContainer.classList.remove('hidden');
    slider.noUiSlider.updateOptions({
      range: { min: effect.min, max: effect.max },
      step: effect.step,
      start: effect.start,
    });
  });
};

export { initEffects };
