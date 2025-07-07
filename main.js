document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("busan-map");

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;

    const namgu = svgDoc.getElementById("namgu");
    const haeundaegu = svgDoc.getElementById("haeundaegu");

    const infoNamgu = document.getElementById("info-namgu");
    const infoHaeundae = document.getElementById("info-haeundaegu");

    if (namgu) {
      namgu.addEventListener("mouseenter", () => {
        namgu.setAttribute("fill", "#FFA500"); // 주황색
        infoNamgu.style.display = "block";
        infoHaeundae.style.display = "none";
      });

      namgu.addEventListener("mouseleave", () => {
        namgu.setAttribute("fill", "#FFFFFF");
        infoNamgu.style.display = "none";
      });
    }

    if (haeundaegu) {
      haeundaegu.addEventListener("mouseenter", () => {
        haeundaegu.setAttribute("fill", "#87CEFA"); // 하늘색
        infoHaeundae.style.display = "block";
        infoNamgu.style.display = "none";
      });

      haeundaegu.addEventListener("mouseleave", () => {
        haeundaegu.setAttribute("fill", "#FFFFFF");
        infoHaeundae.style.display = "none";
      });
    }
  });
});
