const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
  {
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    duration: 1,
    timeline: scrollTrackingTimeline,
  }
);

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  console.log(pos);
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

function designer(element) {
  element.style.color = "rgb(215, 110, 140)";
}

function redesigner(element) {
  element.style.color = "rgb(215, 187, 110)";
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
