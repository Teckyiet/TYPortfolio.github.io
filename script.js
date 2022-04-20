window.addEventListener("load", () => {
  scrollTop();
  pagePreload();
  portfolioNavHoverOn();
  portfolioNavHoverOff();
  portfolioNavClick();
});

const pagePreload = () => {
  const preloadScreen = document.querySelector(".pre-load");
  preloadScreen.style.setProperty("opacity", "0");
  setTimeout(() => {
    preloadScreen.remove();
  }, 2700);
};

const portfolioNavHoverOn = () => {
  const portfolioNav = document.querySelector(".nav-to-portfolio");
  const portfolioNavBtn = document.querySelector(".to-portfolio-button");

  portfolioNavBtn.addEventListener("mouseenter", () => {
    portfolioNav.style.setProperty("opacity", "1");
    portfolioNav.style.setProperty(
      "transform",
      "translateY(-100%) scale(120%)",
    );
  });
};

const portfolioNavHoverOff = () => {
  const portfolioNav = document.querySelector(".nav-to-portfolio");
  const portfolioNavBtn = document.querySelector(".to-portfolio-button");

  portfolioNavBtn.addEventListener("mouseleave", () => {
    portfolioNav.style.setProperty("opacity", "0.65");
    portfolioNav.style.setProperty(
      "transform",
      "translateY(-100%) scale(100%)",
    );
  });
};

const portfolioNavClick = () => {
  const portfolioNavBtn = document.querySelector(".to-portfolio-button");
  const mainHeader = document.querySelector(".header-wrapper");
  const mainHeaderHeight =
    mainHeader.getBoundingClientRect().bottom -
    mainHeader.getBoundingClientRect().top;

  portfolioNavBtn.addEventListener("click", () => {
    window.scrollTo({
      top: mainHeaderHeight,
      behavior: "smooth",
    });
  });
};

const scrollTop = () => {
  return setTimeout(() => window.scrollTo(1000, 0), 10);
};

/* ---------------------- Recent works button and links --------------------- */
/* ------------------------------- projectOne ------------------------------- */
const projectOneDemoBtn = document.querySelector(".demo-btn1");
projectOneDemoBtn.addEventListener("click", () => {
  return window.open(
    "https://teckyiet.github.io/overstuffed_by_TY.github.io/",
    "_blank",
  );
});

const projectOneSourceCodeBtn = document.querySelector(".source-code-btn1");
projectOneSourceCodeBtn.addEventListener("click", () => {
  return window.open(
    "https://github.com/Teckyiet/overstuffed_by_TY.github.io",
    "_blank",
  );
});

/* ------------------------------- projectTwo ------------------------------- */
const projectTwoDemoBtn = document.querySelector(".demo-btn2");
projectTwoDemoBtn.addEventListener("click", () => {
  return window.open("https://teckyiet.github.io/react_tictactoe/", "_blank");
});

const projectTwoSourceCodeBtn = document.querySelector(".source-code-btn2");
projectTwoSourceCodeBtn.addEventListener("click", () => {
  return window.open("https://github.com/Teckyiet/react_tictactoe", "_blank");
});

/* ------------------------------ projectThree ------------------------------ */
const projectThreeDemoBtn = document.querySelector(".demo-btn3");
projectThreeDemoBtn.addEventListener("click", () => {
  return window.open("https://teckyiet.github.io/CryptoSpace/", "_blank");
});

const projectThreeSourceCodeBtn = document.querySelector(".source-code-btn3");
projectThreeSourceCodeBtn.addEventListener("click", () => {
  return window.open("https://github.com/Teckyiet/CryptoSpace", "_blank");
});
