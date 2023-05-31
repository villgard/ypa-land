function zoomer() {
  const width = window.innerWidth;
  const result = {
    viewport: null,
  };

  if (width <= 639) {
    result.viewport = 375;
  } else if (width <= 992) {
    result.viewport = 640;
  } else {
    result.viewport = 1440;
  }


  return result;
}
const { viewport } = zoomer();
const meta = document.head.querySelector('meta[name="viewport"]');
meta.setAttribute('content', `width=${viewport}, user-scalable=no`);

