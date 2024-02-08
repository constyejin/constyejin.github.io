const contnet = document.querySelector(".svg-item2");
const path = document.querySelector(".svg-item2 path");
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = calcDashoffset(
  window.innerHeight * 0.8,
  contnet,
  pathLength
);

function calcDashoffset(scrollY, element, length) {
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  const value = length - length * ratio;
  console.log(value);
  return value < 0 ? 0 : value > length ? length : value;
}

function scrollHandler() {
  const scrollY = window.scrollY + window.innerHeight * 0.8;
  path.style.strokeDashoffset = calcDashoffset(scrollY, contnet, pathLength);
}

window.addEventListener("scroll", scrollHandler);
