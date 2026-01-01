(function () {
  const timeEl = document.getElementById("clock-time");
  const dateEl = document.getElementById("clock-date");

  if (!timeEl || !dateEl) {
    console.error("Clock elements not found");
    return;
  }

  function updateClockGMT7() {
    const now = new Date();

    // Chuyển sang GMT+7
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const gmt7 = new Date(utc + 7 * 60 * 60000);

    const hh = String(gmt7.getHours()).padStart(2, "0");
    const mm = String(gmt7.getMinutes()).padStart(2, "0");
    const ss = String(gmt7.getSeconds()).padStart(2, "0");

    const dd = String(gmt7.getDate()).padStart(2, "0");
    const MM = String(gmt7.getMonth() + 1).padStart(2, "0");
    const yyyy = gmt7.getFullYear();

    timeEl.textContent = `${hh}:${mm}:${ss}`;
    dateEl.textContent = `${dd}/${MM}/${yyyy}`;
  }

  updateClockGMT7();
  setInterval(updateClockGMT7, 1000);
})();
