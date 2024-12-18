export function useMethod() {
  // @toggle(Overflay PopUp)
  const toggleOverlayPopUp = (elmntBackdrop, setElmnt) => {
    const toggleClass = (el, activeClass, inactiveClass) => {
      if (el) {
        el.classList.toggle(activeClass);
        el.classList.toggle(inactiveClass);
      }
    };

    const elBckdrp = document.querySelector(elmntBackdrop);
    const elOverflayPopUp = document.querySelector(setElmnt);
    if (elBckdrp) {
      toggleClass(elBckdrp, 'active', 'nonActive');
    }
    if (elOverflayPopUp) {
      elBckdrp.setAttribute('data-target', setElmnt);
      toggleClass(elOverflayPopUp, 'active', 'nonActive');
    }
  };
  return {
    toggleOverlayPopUp,
  };
}
