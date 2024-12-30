export function useMethod() {
  // @toggle(overflay popup)
  const toggleOverlayPopUp = (backdrp, elmnt) => {
    const toggleClass = (el, activeClass, inactiveClass) => {
      if (el) {
        el.classList.toggle(activeClass);
        el.classList.toggle(inactiveClass);
      }
    };

    const elBckdrp = document.querySelector(backdrp);
    const elOverflayPopUp = document.querySelector(elmnt);
    if (elBckdrp) {
      toggleClass(elBckdrp, 'active', 'nonActive');
    }
    if (elOverflayPopUp) {
      elBckdrp.setAttribute('data-target', elmnt);
      toggleClass(elOverflayPopUp, 'active', 'nonActive');
    }
  };
  return {
    toggleOverlayPopUp,
  };
}
