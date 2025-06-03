var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  form = document.querySelector("form"),
  input = document.querySelector("form > input"),
  route,
  routeExists = false;

input.addEventListener("keyup", typing);
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  if (routeExists) {
    if (route === "./resume") {
      window.location.href = "./portfolio/resume.html";
    } else {
      window.location.href = route;
    }
  }
  e.preventDefault();
}

async function typing(e) {
  route = `./${input.value.toLowerCase()}`;
  try {
    const response = await fetch(route);
    if (response.status === 200 && route !== "./") {
      form.classList.add("route-found");
      routeExists = true;
    } else if (route === "./resume") {
      routeExists = true;
    } else {
      form.classList.remove("route-found");
      routeExists = false;
    }
  } catch (err) {
    console.error("Fetch failed", err);
  }
}

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.onresize = resize;

function noise(ctx) {
  var w = ctx.canvas.width,
    h = ctx.canvas.height,
    idata = ctx.createImageData(w, h),
    buffer32 = new Uint32Array(idata.data.buffer),
    len = buffer32.length,
    i = 0;

  for (; i < len; ) buffer32[i++] = ((255 * Math.random()) | 0) << 24;

  ctx.putImageData(idata, 0, 0);
}

var toggle = true;

// added toggle to get 30 FPS instead of 60 FPS
(function loop() {
  toggle = !toggle;
  if (toggle) {
    requestAnimationFrame(loop);
    return;
  }
  noise(ctx);
  requestAnimationFrame(loop);
})();

window.onload = function () {
  document.querySelector("input").focus();
};
