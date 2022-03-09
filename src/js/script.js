const loadingBar = document.querySelector(".loading-bar__inner");
const btnUpload = document.querySelector(".btn-upload");

const maxWidthDesktop = 440;
const maxWidthMobile = 240;
const minWidth = 20;
const defaultWidthDesktop = 260;
const defaultWidthMobile = 160;
let barWidth;

const getWidth = function () {
  barWidth = loadingBar.offsetWidth;
};

/**
 *
 * @param {int} width
 * "Example: width = '10' "
 */
const setWidth = function (width) {
  loadingBar.style.width = width + "px";
};

const addWidth = function (width) {
  loadingBar.style.width = barWidth + width + "px";
};

/**
 *
 * @param {boolean} state
 * if false the default width walues will be set
 */
const renderBar = function (state = true) {
  // check if init
  if (state) {
    if (screen.width > 950) {
      getWidth();
      if (barWidth >= maxWidthDesktop) {
        setWidth(minWidth);
        getWidth();
      }
      addWidth(20);
    } else {
      getWidth();
      if (barWidth >= maxWidthMobile) {
        setWidth(minWidth);
        getWidth();
      }
      addWidth(20);
    }
  } else {
    if (screen.width > 950) setWidth(defaultWidthDesktop);
    else setWidth(defaultWidthMobile);
  }
};

btnUpload.addEventListener("click", renderBar);

// init
renderBar(false);
