(() => {
  const data = window.CAR_DATA || {};
  const $ = (id) => document.getElementById(id);
  $("carName").textContent = data.carName || "Vehicle";
  $("plate").textContent = data.plate || "—";
  $("ownerName").textContent = data.ownerName || "—";
  const initials = (data.ownerName || "SC").trim().split(/\s+/).slice(0,2).map(x => x[0]).join("");
  $("initials").textContent = initials || "SC";

  const phone = String(data.phone || "").replace(/[^\d+]/g, "");
  const wa = String(data.whatsapp || data.phone || "").replace(/\D/g, "");
  $("callBtn").href = phone ? `tel:${phone}` : "#";
  $("waBtn").href = wa ? `https://wa.me/${wa}` : "#";
  for (const id of ["callBtn", "waBtn"]) {
    $(id).addEventListener("click", (event) => {
      if ($(id).getAttribute("href") === "#") {
        event.preventDefault();
        alert("يرجى إضافة رقم الهاتف في ملف car-data.js أولاً.");
      }
    });
  }

  let english = false;
  $("langToggle").addEventListener("click", () => {
    english = !english;
    document.documentElement.lang = english ? "en" : "ar";
    document.documentElement.dir = english ? "ltr" : "rtl";
    document.querySelectorAll("[data-ar][data-en]").forEach(el => {
      el.textContent = english ? el.dataset.en : el.dataset.ar;
    });
    $("langToggle").textContent = english ? "العربية" : "English";
  });
})();
