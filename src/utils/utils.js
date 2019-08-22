export const htmlDecode = input => {
  var e = document.createElement("div");
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
};

export const formatTime = time => {
  const flooredTime = Math.floor(time);
  const minutes = Math.floor(flooredTime / 60);
  const seconds = flooredTime - minutes * 60;
  const formatedSecond = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formatedSecond}`;
};
