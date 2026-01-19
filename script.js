 const btn = document.getElementById("rtlToggle");
  btn.onclick = () => {
    document.documentElement.dir =
      document.documentElement.dir === "ltr" ? "rtl" : "ltr";
  };