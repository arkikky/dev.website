export function useMethod() {
  // @toggle(Overflay PopUp)
  const toggleOverlayPopUp = (setElmnt) => {
    const toggleClass = (el, activeClass, inactiveClass) => {
      el.classList.toggle(activeClass);
      el.classList.toggle(inactiveClass);
    };

    const elBckdrp = document.querySelector('.ca2025BckdrpOverflay_PopUp');
    const elOverflayPopUp = document.querySelector(setElmnt);

    elBckdrp.setAttribute('data-target', setElmnt);

    if (elBckdrp && elOverflayPopUp) {
      toggleClass(elBckdrp, 'active', 'nonActive');
      toggleClass(elOverflayPopUp, 'active', 'nonActive');
    }
  };

  return {
    toggleOverlayPopUp,
  };
}
