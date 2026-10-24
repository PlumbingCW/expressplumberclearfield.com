(function () {
  "use strict";
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("mob-close");
  if (!toggle || !drawer) { return; }
  function setOpen(open) {
    drawer.classList.toggle("open", open);
    if (overlay) { overlay.classList.toggle("visible", open); }
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open && closeBtn) { closeBtn.focus(); } else if (!open) { toggle.focus(); }
  }
  toggle.addEventListener("click", function () { setOpen(true); });
  if (closeBtn) { closeBtn.addEventListener("click", function () { setOpen(false); }); }
  if (overlay) { overlay.addEventListener("click", function () { setOpen(false); }); }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("open")) { setOpen(false); }
  });
  drawer.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { document.documentElement.style.overflow = ""; }
  });
})();
