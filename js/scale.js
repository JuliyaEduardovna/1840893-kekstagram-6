const initScale = () => {
  const btnSmaller = document.querySelector('.scale__control--smaller');
  const btnBigger = document.querySelector('.scale__control--bigger');
  const scaleControl = document.querySelector('.scale__control--value');
  const previewImg = document.querySelector('.img-upload__preview img');

  let currentScale = 100;
  scaleControl.value = `${100}%`; // change an initial value on the page

  /* Set a scale */

  const applyScale = (value) => {
    currentScale = value;
    scaleControl.value = `${currentScale}%`;
    previewImg.style.transform = `scale(${currentScale / 100})`;
  };

  /* Event Listeners */

  btnSmaller.addEventListener('click', () => {
    const newScale = Math.max(25, currentScale - 25);
    applyScale(newScale);
  });

  btnBigger.addEventListener('click', () => {
    const newScale = Math.min(100, currentScale + 25);
    applyScale(newScale);
  });
};

export { initScale };
