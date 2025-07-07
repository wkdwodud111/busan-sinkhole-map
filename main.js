document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("busan-map");

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    const namgu = svgDoc.getElementById("namgu");
    const infoBox = document.getElementById("info-box");

    if (namgu) {
      namgu.addEventListener("mouseenter", () => {
        namgu.setAttribute("fill", "#FFD700"); // 노란색
        infoBox.style.display = "block";
      });

      namgu.addEventListener("mouseleave", () => {
        namgu.setAttribute("fill", "#FFFFFF");
        infoBox.style.display = "none";
      });
    }
  });
});
