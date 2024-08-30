/* ------------------------------------------------------------------------------
	
  Name: Coinfest Asia 2022 - Website
  Description: Coinfest Asia 2022 - Website
  License: ISC
  
  ------------------------------------------------------------------------------ */
//

// Splide
let getSplide = document.querySelectorAll("[data-slides]");

if (getSplide.length !== 0) {
  getSplide.forEach((tgetEl) => {
    if (tgetEl.getAttribute("data-headerslide") != null) {
      if (tgetEl.classList.contains("splide") == true) {
        var intHeaderSlide = new Splide(
          "#" + tgetEl.getAttribute("id") + ".splide",
          {
            // updateOnMove: true,
            // type: "loop",
            // perPage: 1,
            // autoplay: true,
            // interval: 5000,
            // pauseOnHover: true,
            // pauseOnFocus: true,
            // resetProgress: true,
            // arrows: false,
            // pagination: false,
            // keyboard: false,
            // lazyLoad: "nearby",
            // gap: "16px",
            // autoHeight: true,
            // autoWidth: true,
            // padding: { left: "0", right: "0" },
            // breakpoints: {
            //   640: {
            //     gap: "8px",
            //     padding: { left: "16px", right: "16px" },
            //   },
            // },
            updateOnMove: true,
            type: "loop",
            perPage: 1,
            // autoplay: true,
            // interval: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: true,
            arrows: false,
            pagination: false,
            keyboard: false,
            lazyLoad: "nearby",
            gap: "16px",
            // autoHeight: true,
            // autoWidth: true,
            fixedWidth: "726px",
            focus: "center",
            padding: { left: "0", right: "0" },
            breakpoints: {
              640: {
                gap: "8px",
                padding: { left: "16px", right: "16px" },
              },
            },
          }
        );

        var gCntrol = tgetEl.getAttribute("data-slide-control");

        if (gCntrol != "") {
          var sIntCntrol = document.querySelector(gCntrol);

          if (sIntCntrol != null) {
            var gCntrolLeft = sIntCntrol.getAttribute("data-control-left");
            var gCntrolRight = sIntCntrol.getAttribute("data-control-right");

            if (gCntrolLeft != "") {
              var sCntrolLft = document.querySelector(gCntrolLeft);
              if (sCntrolLft != null) {
                sCntrolLft.addEventListener("click", (e) => {
                  intHeaderSlide.go("<");

                  e.preventDefault();
                });
              }
            }

            if (gCntrolRight != "") {
              var sCntrolRght = document.querySelector(gCntrolRight);
              if (sCntrolRght != null) {
                sCntrolRght.addEventListener("click", (e) => {
                  intHeaderSlide.go(">");

                  e.preventDefault();
                });
              }
            }
          }
        }

        var gCntrolProgrss = document.querySelector("[data-slide-progress]");

        if (gCntrolProgrss != "") {
          intHeaderSlide.on("mounted move", () => {
            var sProgrssEnd = intHeaderSlide.Components.Controller.getEnd() + 1;

            gCntrolProgrss.childNodes[1].style.width =
              String((100 * (intHeaderSlide.index + 1)) / sProgrssEnd) + "%";
          });
        }

        intHeaderSlide.mount();
      }
    } else if (tgetEl.getAttribute("data-testimonials") != null) {
      if (tgetEl.classList.contains("splide") == true) {
        var intConfgs = new Splide(
          "#" + tgetEl.getAttribute("id") + ".splide",
          {
            updateOnMove: true,
            type: "loop",
            perPage: 1,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: true,
            arrows: false,
            keyboard: false,
            lazyLoad: "nearby",
            gap: "16px",
            fixedWidth: "726px",
            focus: "center",
            padding: { left: "0", right: "0" },
            breakpoints: {
              640: {
                gap: "8px",
                fixedWidth: "100%",
              },
            },
          }
        );

        var gCntrol = tgetEl.getAttribute("data-slide-control");

        if (gCntrol != "") {
          var sIntCntrol = document.querySelector(gCntrol);

          if (sIntCntrol != null) {
            var gCntrolLeft = sIntCntrol.getAttribute("data-control-left");
            var gCntrolRight = sIntCntrol.getAttribute("data-control-right");

            if (gCntrolLeft != "") {
              var sCntrolLft = document.querySelector(gCntrolLeft);
              if (sCntrolLft != null) {
                sCntrolLft.addEventListener("click", (e) => {
                  intConfgs.go("<");

                  e.preventDefault();
                });
              }
            }

            if (gCntrolRight != "") {
              var sCntrolRght = document.querySelector(gCntrolRight);
              if (sCntrolRght != null) {
                sCntrolRght.addEventListener("click", (e) => {
                  intConfgs.go(">");

                  e.preventDefault();
                });
              }
            }
          }
        }

        intConfgs.mount();
      }
    } else if (tgetEl.getAttribute("data-slides-mainthumbnails") != null) {
      if (tgetEl.classList.contains("splide") == true) {
        var initMainThumbnails = new Splide(
          "#" + tgetEl.getAttribute("id") + ".splide",
          {
            trimSpace: false,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: true,
            arrows: false,
            pagination: false,
            keyboard: true,
            lazyLoad: "nearby",
            gap: "24px",
            width: "100%",
            breakpoints: {
              640: {
                gap: "16px",
              },
            },
          }
        );

        var getAttrThumbnails = tgetEl.getAttribute("data-slides-thumbnails");

        if (getAttrThumbnails != "") {
          var setAttrThumbnails = document.querySelector(getAttrThumbnails);

          if (setAttrThumbnails != null) {
            var getItemsThumbnail = document.querySelectorAll(
              "#" +
                setAttrThumbnails.getAttribute("id") +
                ".splide .splide__list .splide__slide"
            );

            for (var i = 0; i < getItemsThumbnail.length; i++) {
              initThumbnail(getItemsThumbnail[i], i);
            }

            function initThumbnail(thumbnail, index) {
              thumbnail.addEventListener("click", (e) => {
                initMainThumbnails.go(index);

                e.preventDefault();
              });
            }
          }
        }

        var initItemsThumbnails = new Splide(
          "#" + setAttrThumbnails.getAttribute("id"),
          {
            fixedWidth: 100,
            gap: 0,
            rewind: true,
            arrows: false,
            pagination: false,
            lazyLoad: "nearby",
            breakpoints: {
              640: {
                fixedWidth: 70,
              },
            },
          }
        );

        initMainThumbnails.sync(initItemsThumbnails);
        initItemsThumbnails.mount();
        initMainThumbnails.mount();
      }
    } else if (tgetEl.getAttribute("data-slides-grids") != null) {
      if (tgetEl.classList.contains("splide") == true) {
        var initGrids = new Splide(
          "#" + tgetEl.getAttribute("id") + ".splide",
          {
            type: "loop",
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: true,
            arrows: false,
            pagination: false,
            keyboard: false,
            drag: false,
            gap: "24px",
            width: "100%",
            fixedWidth: "100%",
            breakpoints: {
              640: {
                gap: "0",
                width: "100%",
                fixedWidth: "100%",
              },
            },
          }
        );

        var getControl = tgetEl.getAttribute("data-slide-control");

        if (getControl != "") {
          var setInitControl = document.querySelector(getControl);

          if (setInitControl != null) {
            var getControlLeft =
              setInitControl.getAttribute("data-control-left");
            var getControlRight =
              setInitControl.getAttribute("data-control-right");

            if (getControlLeft != "") {
              var setControlLeft = document.querySelector(getControlLeft);
              if (setControlLeft != null) {
                setControlLeft.addEventListener("click", (e) => {
                  initGrids.go("<");

                  e.preventDefault();
                });
              }
            }

            if (getControlRight != "") {
              var setControlRight = document.querySelector(getControlRight);
              if (setControlRight != null) {
                setControlRight.addEventListener("click", (e) => {
                  initGrids.go(">");

                  e.preventDefault();
                });
              }
            }
          }
        }

        initGrids.mount();
      }
    } else if (tgetEl.getAttribute("data-otherproduct") != null) {
      if (tgetEl.classList.contains("splide") == true) {
        var initOtherProducts = new Splide(
          "#" + tgetEl.getAttribute("id") + ".splide",
          {
            arrows: false,
            pagination: false,
            keyboard: true,
            gap: "24px",
            width: "100%",
            fixedWidth: "384px",
            breakpoints: {
              640: {
                gap: "16px",
                fixedWidth: "100%",
                pagination: true,
                destroy: true,
              },
            },
          }
        );

        initOtherProducts.mount();
      }
    }
  });
}

// Accordion (Tailwind Elements - Plugin)
let getAccrdion = document.querySelectorAll(".accordion .accordion-collapse");

if (getAccrdion.length !== 0) {
  getAccrdion.forEach((tgetEl) => {
    if (tgetEl.classList.contains("show") == true) {
      if (
        tgetEl.previousElementSibling.childNodes[1].classList.contains(
          "collapsed"
        ) == true
      ) {
        tgetEl.previousElementSibling.childNodes[1].classList.remove(
          "collapsed"
        );
      }
    }
  });
}

// Tabs
var setNavTabs = document.querySelectorAll(".nav.nav-tabs .nav-item .nav-link");
var setNavTabsActive = document.querySelector(
  ".nav.nav-tabs .nav-item .nav-link.active"
);

if (setNavTabsActive != null) {
  setNavTabsActive.parentElement.classList.add("active");

  if (setNavTabsActive.getAttribute("data-url-target") != "") {
    var getUrlTarget = setNavTabsActive.getAttribute("data-url-target");

    if (getUrlTarget != "") {
      var setUrlTarget = document.querySelector(getUrlTarget);

      if (setNavTabsActive.getAttribute("data-url")) {
        var getUrl = setNavTabsActive.getAttribute("data-url");

        setUrlTarget.setAttribute("href", getUrl);
      }
    }
  }
}

if (setNavTabs.length !== 0) {
  setNavTabs.forEach((tgetEl) => {
    tgetEl.addEventListener("click", (e) => {
      var getNavTabsActive = document.querySelectorAll(
        ".nav.nav-tabs .nav-item.active"
      );

      getNavTabsActive.forEach((el) => {
        el.classList.remove("active");
      });

      if (tgetEl.parentElement.classList.contains("active") != true) {
        tgetEl.parentElement.classList.add("active");

        if (tgetEl.getAttribute("data-url-target") != "") {
          var getUrlTarget = tgetEl.getAttribute("data-url-target");

          if (getUrlTarget != "") {
            var setUrlTarget = document.querySelector(getUrlTarget);

            if (tgetEl.getAttribute("data-url")) {
              var getUrl = tgetEl.getAttribute("data-url");

              setUrlTarget.setAttribute("href", getUrl);
            }
          }
        }
      }

      e.preventDefault();
    });
  });
}

// Input Datepicker (Flowbite Js - Plugin)
let getDatePicker = document.querySelectorAll(".form-input-datepicker");

if (getDatePicker.length !== 0) {
  getDatePicker.forEach((tgetEl) => {
    if (tgetEl.classList.contains("today") == true) {
      var setDate = new Date();
      var setToday;

      if (setDate) {
        var years = setDate.getFullYear();
        var month = setDate.getMonth();
        var day = setDate.getDate();

        if (day < 10) {
          setToday = years + "-" + "0" + (month + 1) + "-" + "0" + day;
        } else if (day >= 10) {
          setToday = years + "-" + "0" + (month + 1) + "-" + day;
        }

        tgetEl.setAttribute("value", setToday);
      }
    }

    tgetEl.setAttribute("datepicker", "");
    tgetEl.setAttribute("datepicker-buttons", "");
    tgetEl.setAttribute("datepicker-format", "yyyy-mm-dd");
    tgetEl.setAttribute("datepicker-orientation", "bottom right");
    tgetEl.setAttribute("datepicker-autohide", "");
  });
}

// Input Time (Coutdown - Runtime)
let getInputTime = document.querySelectorAll(".form-input-time");

if (getInputTime.length !== 0) {
  getInputTime.forEach((tgetEl) => {
    if (tgetEl.classList.contains("active") == true) {
      setInterval(() => {
        function setZero(i) {
          if (i < 10) {
            i = "0" + i;
          }

          return i;
        }

        const setDate = new Date();
        let h = setZero(setDate.getHours());
        let m = setZero(setDate.getMinutes());
        let s = setZero(setDate.getSeconds());

        let setTime = h + ":" + m + ":" + s;

        tgetEl.setAttribute("value", setTime);
      }, 1000);
    }
  });
}

// CoutDown Line
var sCutdown = document.querySelectorAll("[data-coutdown]");

if (sCutdown.length !== 0) {
  sCutdown.forEach((tgetEl) => {
    var cutDownDte = new Date("Jul 31, 2022 23:59:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(() => {
      var now = new Date().getTime();
      var distance = cutDownDte - now;

      var dys = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hors = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var mints = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var secnds = Math.floor((distance % (1000 * 60)) / 1000);

      tgetEl.innerHTML =
        dys + "d " + hors + "h " + mints + "m " + secnds + "s ";

      if (distance < 0) {
        clearInterval(x);

        tgetEl.innerHTML = "0d 0h 0m 0s";
      }
    }, 1000);
  });
}

// Agenda
var setAgenda = document.querySelectorAll("[data-agenda-dropdown]");

if (setAgenda.length !== 0) {
  setAgenda.forEach((tgetEl) => {
    tgetEl.addEventListener("click", (e) => {
      var getAttrTarget = tgetEl.getAttribute("data-agenda-target");

      if (tgetEl.classList.contains("show") != true) {
        tgetEl.classList.add("show");
      } else {
        tgetEl.classList.remove("show");
      }

      if (getAttrTarget != "") {
        var setAttrTarget = document.querySelector(getAttrTarget);

        if (setAttrTarget != null) {
          if (setAttrTarget.classList.contains("hidden") == true) {
            setAttrTarget.classList.remove("hidden");
            setAttrTarget.classList.add("grid");
          } else {
            setAttrTarget.classList.remove("grid");
            setAttrTarget.classList.add("hidden");
          }
        }
      }

      e.preventDefault();
    });
  });
}

// ScrollSpy Content
var getScrollSpy = document.querySelectorAll("[data-scrllspy]");
var gEvntScrllSpyT = document.querySelectorAll(
  ".wrapp-scrollspy .faq-article-group_content"
);

if (getScrollSpy.length !== 0) {
  getScrollSpy.forEach((tgetEl) => {
    var getAttrTarget = tgetEl.getAttribute("data-scrllspy-target");

    if (getAttrTarget !== "") {
      var setAttrTarget = document.querySelector(getAttrTarget);

      if (setAttrTarget !== "") {
        var getScrollSpyTo = document.querySelectorAll(
          ".nav-scrollspy li .nav-link"
        );

        if (getScrollSpyTo.length !== 0) {
          getScrollSpyTo.forEach((elTgetTo) => {
            elTgetTo.addEventListener("click", (e) => {
              var getAttrHref = elTgetTo.getAttribute("href");

              if (getAttrHref !== "") {
                var setAttrHref = document.querySelector(getAttrHref);

                if (setAttrHref !== null) {
                  window.scrollTo({
                    top: setAttrHref.offsetTop + 52,
                    left: 0,
                    behavior: "smooth",
                  });
                }
              }

              e.preventDefault();
            });
          });
        }
      }
    }
  });
}

// Nav Scroll Spy
var gLnkScrllSpyT = document.querySelectorAll(".nav-scrollspy li .nav-link");

// Navbar
var setNavbar = document.querySelector("[data-navbar]");
var setNavbarCollapse = document.querySelector("[data-collapse]");
let stNvMnu = document.querySelectorAll("[data-navmnu]");

// Navbar Menu (Toggle)
let getToggleMenu = document.querySelectorAll("[data-toggle-menu]");

if (getToggleMenu.length !== 0) {
  getToggleMenu.forEach((tgetEl) => {
    var getAttrTarget = tgetEl.getAttribute("data-target");
    var getAttrIcons = tgetEl.getAttribute("data-icons");

    if (getAttrTarget !== "") {
      tgetEl.addEventListener("click", (e) => {
        var setAttrTarget = document.querySelector(getAttrTarget);

        if (setAttrTarget !== null) {
          var setAttrIcons = document.querySelector(getAttrIcons);

          if (setAttrIcons !== null) {
            setAttrIcons.classList.contains("close") !== true
              ? setAttrIcons.classList.add("close")
              : setAttrIcons.classList.remove("close");
          }

          if (setAttrTarget.classList.contains("active") !== true) {
            setAttrTarget.classList.add("active");

            if (setNavbar.classList.contains("active") == true) {
            } else {
              setNavbar.classList.add("active");
            }
          } else {
            setAttrTarget.classList.remove("active");

            if (document.body.classList.contains("active") == false) {
              setNavbar.classList.remove("active");
            }
          }
        }

        e.preventDefault();
      });
    }
  });
}

// ScrollTo
var getScrollTo = document.querySelectorAll("[data-scrollto]");

if (getScrollTo.length !== 0) {
  getScrollTo.forEach((tgetEl) => {
    tgetEl.addEventListener("click", (e) => {
      var getAttrTarget = tgetEl.getAttribute("href");

      if (getAttrTarget !== "") {
        var setAttrTarget = document.querySelector(getAttrTarget);

        if (setAttrTarget !== null) {
          var chckOffsTop;

          if (setAttrTarget.offsetTop > 0) {
            chckOffsTop =
              setAttrTarget.offsetTop - (setNavbar.clientHeight + 44);
          } else {
            chckOffsTop = setAttrTarget.offsetTop;
          }

          window.scrollTo({
            top: chckOffsTop,
            left: 0,
            behavior: "smooth",
          });
        }
      }

      e.preventDefault();
    });
  });
}

// Scroll To Navbar
var gScrllTo = document.querySelectorAll("[data-navscrollto]");

if (gScrllTo.length !== 0) {
  gScrllTo.forEach((tgetEl) => {
    tgetEl.addEventListener("click", (e) => {
      gScrllTo.forEach((gDtaScrllTo) => {
        if (gDtaScrllTo.classList.contains("active")) {
          gDtaScrllTo.classList.remove("active");
        }
      });

      if (!tgetEl.classList.contains("active")) {
        tgetEl.classList.add("active");
      }

      if (tgetEl.classList.contains("active")) {
        if (stNvMnu.length !== 0) {
          stNvMnu.forEach((tgetElNvMnu) => {
            if (tgetElNvMnu.classList.contains("active")) {
              setTimeout(() => {
                tgetElNvMnu.classList.remove("active");
              }, 600);
            }
          });
        }
      }

      if (getToggleMenu.length !== 0) {
        getToggleMenu.forEach((tgetElToggle) => {
          var gElmtIcons = tgetElToggle.getAttribute("data-icons");

          if (gElmtIcons !== "") {
            let sElmtIcons = document.querySelector(gElmtIcons);

            if (sElmtIcons !== null) {
              if (sElmtIcons.classList.contains("close")) {
                setTimeout(() => {
                  sElmtIcons.classList.remove("close");
                }, 600);
              }
            }
          }
        });
      }

      var gAttr_Href = tgetEl.getAttribute("href");

      if (gAttr_Href !== "") {
        var sElmtTget = document.querySelector(gAttr_Href);

        if (sElmtTget !== null) {
          var chckOffsTop;

          if (sElmtTget.offsetTop > 0) {
            chckOffsTop = sElmtTget.offsetTop - (setNavbar.clientHeight + 44);
          } else {
            chckOffsTop = sElmtTget.offsetTop;
          }

          window.scrollTo({
            top: chckOffsTop,
            left: 0,
            behavior: "smooth",
          });
        }
      }

      e.preventDefault();
    });
  });
}

// Navbar Menu Item (Dropdown)
var sNvMnuDropdwn = document.querySelectorAll(
  ".navbar .nav.menu .dropdown-item.menu-item"
);

if (sNvMnuDropdwn.length !== 0) {
  sNvMnuDropdwn.forEach((tgetEl) => {
    if (tgetEl.classList.contains("dropdown-item") == true) {
      var gNvSubMnuDropdwn = tgetEl.childNodes[3];

      if (gNvSubMnuDropdwn !== null) {
        gNvSubMnuDropdwn.insertAdjacentHTML(
          "beforebegin",
          `<button class="dropdown-toggle text-current outline-none" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="javascript:void(0);">
            <svg class="dropdown-toggle-icons fill-current h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" />
            </svg>
          </button>`
        );
      }
    }
  });
}

// Quantity
var setProductQuantity = document.querySelectorAll(".bx-products-quantity");

if (setProductQuantity.length !== 0) {
  setProductQuantity.forEach((tgetEl) => {
    var setInptQuantity = tgetEl.querySelector(
      ".bx-products-quantity .quantity input[type=number]"
    );
    var setQuantityMin = tgetEl.querySelector(
      ".bx-products-quantity .quantity .quantity-min"
    );
    var setQuantityPlus = tgetEl.querySelector(
      ".bx-products-quantity .quantity .quantity-plus"
    );

    if (setQuantityMin != null) {
      setQuantityMin.addEventListener("click", (e) => {
        if (setInptQuantity != null) {
          if (setInptQuantity.value >= 2) {
            var jumlahQuantity = parseInt(setInptQuantity.value);
            var plusQuantity = 1;

            setInptQuantity.value = jumlahQuantity - plusQuantity;

            setInptQuantity.setAttribute("value", setInptQuantity.value);
          }
        }

        e.preventDefault();
      });
    }

    if (setQuantityPlus != null) {
      setQuantityPlus.addEventListener("click", (e) => {
        if (setInptQuantity != null) {
          if (setInptQuantity.value < 5) {
            var jumlahQuantity = parseInt(setInptQuantity.value);
            var plusQuantity = 1;

            setInptQuantity.value = jumlahQuantity + plusQuantity;

            setInptQuantity.setAttribute("value", setInptQuantity.value);
          }
        }

        e.preventDefault();
      });
    }
  });
}

// Input Tel (With Flags - Intl Plugin)
let gInptTelFlgs = document.querySelectorAll(".form-input-telflags");

if (gInptTelFlgs.length !== 0) {
  gInptTelFlgs.forEach((tgetEl) => {
    var confgInt = window.intlTelInput(tgetEl, {
      initialCountry: "auto",
      hiddenInput: "Telephone",
      formatOnDisplay: true,
      preferredCountries: ["us", "id", "fr", "ru"],
      separateDialCode: true,
      customPlaceholder: function (
        selectedCountryPlaceholder,
        selectedCountryData
      ) {
        return "e.g. " + selectedCountryPlaceholder;
      },
      geoIpLookup: (callback) => {
        $.get(
          "https://ipinfo.io?token=e50a777a51a7f2",
          function () {},
          "jsonp"
        ).always((resp) => {
          var countryCode = resp && resp.country ? resp.country : "us";
          callback(countryCode);
        });
      },
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js",
    });
  });
}

// Checkout Payment (Custom)
let gChecktPymentInpt = document.querySelectorAll(
  ".woocommerce-checkout-review-order .woocommerce-checkout-payment .wc_payment_methods .wc_payment_method"
);

if (gChecktPymentInpt.length !== 0) {
  gChecktPymentInpt.forEach((tgetEl) => {
    if (tgetEl.childNodes[1].checked == true) {
      tgetEl.classList.add("active");
    }
  });
}

// Data Expands
let gDtaExpnds = document.querySelectorAll("[data-expands]");

if (gDtaExpnds.length !== 0) {
  gDtaExpnds.forEach((tgetEl) => {
    var gDtaAttrTgetLbel = tgetEl.getAttribute("data-label");

    if (gDtaAttrTgetLbel != "") {
      tgetEl.innerHTML =
        gDtaAttrTgetLbel +
        `<svg class="icons fill-current ml-1.5 sm:ml-2 h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 25 24"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.85147 8.75137C7.3201 8.28275 8.0799 8.28275 8.54853 8.75137L12.5 12.7029L16.4515 8.75137C16.9201 8.28275 17.6799 8.28275 18.1485 8.75137C18.6171 9.22001 18.6171 9.9798 18.1485 10.4484L13.3485 15.2484C12.8799 15.717 12.1201 15.717 11.6515 15.2484L6.85147 10.4484C6.38284 9.9798 6.38284 9.22001 6.85147 8.75137Z" />
                </svg>`;
    } else {
      tgetEl.innerHTML = `See all <svg class="icons fill-current ml-1.5 sm:ml-2 h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 25 24"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.85147 8.75137C7.3201 8.28275 8.0799 8.28275 8.54853 8.75137L12.5 12.7029L16.4515 8.75137C16.9201 8.28275 17.6799 8.28275 18.1485 8.75137C18.6171 9.22001 18.6171 9.9798 18.1485 10.4484L13.3485 15.2484C12.8799 15.717 12.1201 15.717 11.6515 15.2484L6.85147 10.4484C6.38284 9.9798 6.38284 9.22001 6.85147 8.75137Z" />
                </svg>`;
    }

    tgetEl.addEventListener("click", (e) => {
      var gDtaAttrTget = tgetEl.getAttribute("data-target");

      if (gDtaAttrTget != "") {
        var sAttrTget = document.querySelector(gDtaAttrTget);

        if (sAttrTget !== null) {
          if (sAttrTget.classList.contains("hide")) {
            tgetEl.classList.add("show");

            sAttrTget.classList.remove("hide");
            sAttrTget.classList.add("show");

            tgetEl.innerHTML = `Back to hide <svg class="icons fill-current ml-1.5 sm:ml-2 h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 25 24"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.85147 8.75137C7.3201 8.28275 8.0799 8.28275 8.54853 8.75137L12.5 12.7029L16.4515 8.75137C16.9201 8.28275 17.6799 8.28275 18.1485 8.75137C18.6171 9.22001 18.6171 9.9798 18.1485 10.4484L13.3485 15.2484C12.8799 15.717 12.1201 15.717 11.6515 15.2484L6.85147 10.4484C6.38284 9.9798 6.38284 9.22001 6.85147 8.75137Z" />
              </svg>`;
          } else {
            tgetEl.classList.remove("show");

            sAttrTget.classList.remove("show");
            sAttrTget.classList.add("hide");

            if (gDtaAttrTgetLbel != "") {
              tgetEl.innerHTML =
                gDtaAttrTgetLbel +
                `<svg class="icons fill-current ml-1.5 sm:ml-2 h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 25 24"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.85147 8.75137C7.3201 8.28275 8.0799 8.28275 8.54853 8.75137L12.5 12.7029L16.4515 8.75137C16.9201 8.28275 17.6799 8.28275 18.1485 8.75137C18.6171 9.22001 18.6171 9.9798 18.1485 10.4484L13.3485 15.2484C12.8799 15.717 12.1201 15.717 11.6515 15.2484L6.85147 10.4484C6.38284 9.9798 6.38284 9.22001 6.85147 8.75137Z" />
              </svg>`;
            } else {
              tgetEl.innerHTML = `See all <svg class="icons fill-current ml-1.5 sm:ml-2 h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 25 24"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.85147 8.75137C7.3201 8.28275 8.0799 8.28275 8.54853 8.75137L12.5 12.7029L16.4515 8.75137C16.9201 8.28275 17.6799 8.28275 18.1485 8.75137C18.6171 9.22001 18.6171 9.9798 18.1485 10.4484L13.3485 15.2484C12.8799 15.717 12.1201 15.717 11.6515 15.2484L6.85147 10.4484C6.38284 9.9798 6.38284 9.22001 6.85147 8.75137Z" />
                </svg>`;
            }
          }
        }
      }

      e.preventDefault();
    });
  });
}

// AOS Init
// AOS.init({
//   once: false,
// });

// Data Masonry
var gtMasonry = document.querySelectorAll("[data-masonry]");

// Data Opening
var gtOpening = document.querySelectorAll("[data-opening]");

// Data Hightlights
var gtHightligts = document.querySelectorAll("[data-highlights]");

var gtHightligtsInit = lightGallery(
  document.getElementById("highlightsGallery"),
  {
    autoplayFirstVideo: false,
    plugins: [lgFullscreen, lgZoom, lgThumbnail],
    thumbnail: true,
    licenseKey: "your_license_key",
    mobileSettings: {
      controls: false,
      showCloseIcon: false,
      download: false,
      rotate: false,
    },
  }
);

if (gtHightligts.length !== 0) {
  gtHightligts.forEach((tgetEl) => {
    tgetEl.addEventListener("click", (e) => {
      gtHightligtsInit.openGallery();

      e.preventDefault();
    });
  });
}

//  App Windows Load
window.addEventListener("load", () => {
  // Checkout Show Placeholder
  var getFormAttendee = document.querySelectorAll(
    ".fooevents-attendee .form-row.attendee-class label"
  );

  if (getFormAttendee.length !== 0) {
    getFormAttendee.forEach((tgetEl) => {
      if (tgetEl.innerText == "First Name *") {
        tgetEl.nextElementSibling.childNodes[0].setAttribute(
          "placeholder",
          "Eg: Budi"
        );
      }
      if (tgetEl.innerText == "Last Name *") {
        tgetEl.nextElementSibling.childNodes[0].setAttribute(
          "placeholder",
          "Eg: Dermawan"
        );
      }
      if (tgetEl.innerText == "Email *") {
        tgetEl.nextElementSibling.childNodes[0].setAttribute(
          "placeholder",
          "Eg: hi@coinfest.asia"
        );
      }
      if (tgetEl.innerText == "Telephone *") {
        tgetEl.nextElementSibling.childNodes[0].setAttribute(
          "placeholder",
          "Eg: 087654123987"
        );
      }
      if (tgetEl.innerText == "Telegram Account (optional)") {
        tgetEl.nextElementSibling.childNodes[0].setAttribute(
          "placeholder",
          "Eg: Mediaku Corporate"
        );
      }
      if (tgetEl.innerText == "Company Name *") {
        tgetEl.nextElementSibling.childNodes[0].setAttribute(
          "placeholder",
          "Eg: @coinfest_asia"
        );
      }
      if (
        tgetEl.innerText ==
        "What Type of Connections and Networking Do You Hope To Achieve At The Event? *"
      ) {
        tgetEl.nextElementSibling.childNodes[0].setAttribute(
          "placeholder",
          "E.g: I would love to connect with web3 communities in Asia"
        );
      }
    });
  }

  // Show Approximately (Products)
  var getApproximately = document.querySelectorAll(".price .wmc-cache-pid");

  if (getApproximately.length !== 0) {
    getApproximately.forEach((tgetEl) => {
      if (tgetEl !== null) {
        var setApproximately = tgetEl.querySelector(".wmc-approximately");

        if (setApproximately !== null) {
          tgetEl.insertAdjacentHTML(
            "afterend",
            "<span class='price-currency'>" +
              setApproximately.innerText +
              "</span>"
          );
        }
      }
    });
  }

  // Opening
  if (gtOpening.length !== 0) {
    gtOpening.forEach((tgetEl) => {
      if (tgetEl.classList.contains("hide")) {
        tgetEl.classList.remove("hide");
        tgetEl.classList.add("opening");
      }
    });
  }

  if (gtMasonry.length !== 0) {
    gtMasonry.forEach((tgetEl) => {
      if (!tgetEl.classList.contains("active")) {
        tgetEl.classList.add("active");
      }
    });
  }
});

// Checkout Intl Phone Number
var sBillPhne = document.querySelector("#billing_phone_field input");

if (sBillPhne != null) {
  sBillPhne.classList.add("form-input-telflags");
}

// Button ScrollUp
var sScrllUp = document.querySelector("[data-scrollup]"); // ScrollUp

if (sScrllUp != null) {
  sScrllUp.addEventListener("click", (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    e.preventDefault();
  });
}

// App Scroll
var defltScroll = Math.ceil(window.pageYOffset);

// Default Navbar
if (defltScroll >= 12) {
  setNavbar.classList.add("active");
}

window.addEventListener("scroll", () => {
  var lngthScroll = Math.ceil(window.pageYOffset);

  if (setNavbar !== null) {
    if (lngthScroll >= 12) {
      setNavbar.classList.add("active");
      document.body.classList.add("active");
    } else if (lngthScroll <= 12) {
      if (setNavbarCollapse.classList.contains("active") != true) {
        setNavbar.classList.remove("active");
      }

      document.body.classList.remove("active");
    }
  }

  // ScrollUp
  if (sScrllUp != null) {
    if (lngthScroll > document.documentElement.clientHeight) {
      sScrllUp.classList.remove("hiddn");
      sScrllUp.classList.add("shw");
    } else {
      sScrllUp.classList.remove("shw");
      sScrllUp.classList.add("hiddn");
    }
  }

  // Scroll Spy
  if (gEvntScrllSpyT.length !== 0) {
    gEvntScrllSpyT.forEach((tgetEl) => {
      if (lngthScroll > tgetEl.offsetTop + 18) {
        if (gLnkScrllSpyT.length !== 0) {
          gLnkScrllSpyT.forEach((elLnkScrllT) => {
            var sEvntScrllSpyT = "#" + tgetEl.getAttribute("id");

            elLnkScrllT.classList.remove("active");
            elLnkScrllT.parentElement.classList.remove("active");

            if ((sEvntScrllSpyT == elLnkScrllT.getAttribute("href")) == true) {
              elLnkScrllT.classList.add("active");
              elLnkScrllT.parentElement.classList.add("active");
            }
          });
        }
      } else if (lngthScroll < tgetEl.offsetTop + 18) {
        if (gLnkScrllSpyT.length !== 0) {
          gLnkScrllSpyT.forEach((elLnkScrllT) => {
            var sEvntScrllSpyT = "#" + tgetEl.getAttribute("id");

            if ((sEvntScrllSpyT == elLnkScrllT.getAttribute("href")) == true) {
              elLnkScrllT.classList.remove("active");
              elLnkScrllT.parentElement.classList.remove("active");
            }
          });
        }
      }
    });
  }

  // Scroll Spy Nav Menu
  // if (gScrllTo.length !== 0) {
  //   gScrllTo.forEach((tgetEl) => {
  //     let gAttr_Href = tgetEl.getAttribute("href");

  //     if (gAttr_Href !== "") {
  //       var sElmtTget = document.querySelector(gAttr_Href);

  //       if(sElmtTget !== "") {
  //         if (lngthScroll > sElmtTget.offsetTop - 396) {
  //           gScrllTo.forEach((gDtaScrllTo) => {
  //             if (gDtaScrllTo.classList.contains("active")) {
  //               gDtaScrllTo.classList.remove("active");
  //             }
  //           });

  //           if (!tgetEl.classList.contains("active")) {
  //             tgetEl.classList.add("active");
  //           } else {
  //             tgetEl.classList.add("active");
  //           }
  //         } else if (lngthScroll < sElmtTget.offsetTop - 396) {
  //           if (!tgetEl.classList.contains("active")) {
  //             tgetEl.classList.remove("active");
  //           } else {
  //             tgetEl.classList.remove("active");
  //           }
  //         }
  //       }
  //     }
  //   });
  // }

  lngthScroll = defltScroll;
});
