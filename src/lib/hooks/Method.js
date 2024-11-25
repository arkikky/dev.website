export function useMethod() {
  // @toggle(Overflay PopUp)
  const toggleOverlayPopUp = () => {
    const toggleClass = (element, activeClass, inactiveClass) => {
      element.classList.toggle(activeClass);
      element.classList.toggle(inactiveClass);
    };

    const elBckdrp = document.querySelector('.ca2025BckdrpOverflay_PopUp');
    const elOverflayPopUp = document.querySelector('.ca2025Overflay_PopUp');

    if (elBckdrp && elOverflayPopUp) {
      toggleClass(elBckdrp, 'active', 'nonActive');
      toggleClass(elOverflayPopUp, 'active', 'nonActive');
    }
  };

  return {
    toggleOverlayPopUp,
  };
}
