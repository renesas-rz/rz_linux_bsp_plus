function getParameterValue(url, key) {
  const match = url.match(new RegExp('[?&]' + key + '=([^&#]+)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function scrollIntoTarget(hash) {
  const targetHeader = document.getElementById(hash);
  if (targetHeader) {
    targetHeader.scrollIntoView({ behavior: 'smooth' });
  }
}

document$.subscribe(function() {
  // back btn @ download page
  const evk = getParameterValue(window.location.href, "evk");

  if (!!evk) {
    if (evk === "all") {
      var btns = document.querySelectorAll('.btn-evk-home');
      btns.forEach((btn) => {
          btn.href = btn.href + "#start-your-journey";
      });
    } else {
      const hash = window.location.href.replace(/\?.*/g, "").replace(/.*\#/g, "");
      scrollIntoTarget(hash);
      var btn = document.getElementById("back_to_" + evk);
      btn.classList.remove('back_to_getting_started_btn');
    }
  }
})
