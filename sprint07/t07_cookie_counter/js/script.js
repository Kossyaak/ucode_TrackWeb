let data = 0;

window.onload = amogus = async () => {
  const response = await fetch('/views-count');
  const dataCurr = await response.json();
  console.log(dataCurr);
  if (dataCurr.count !== data) {
    data = dataCurr;
    document.getElementById(
      'views-count'
    ).innerText = `This page was loaded ${dataCurr.views} time(s) in last minutes.`;
  }
  setTimeout(() => {
    amogus();
  }, 5000);
};
