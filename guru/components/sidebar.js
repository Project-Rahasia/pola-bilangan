const getChapChild = (path) => {
  return this.location.pathname.substring() === path ? "active" : "";
};

document.querySelector("#nav").innerHTML = `
<div>
  <a href="#" class="nav_logo">
    <i class='bx bx-layer nav_logo-icon'></i> <span class="nav_logo-name">Guru</span>
  </a>
  <div class="nav_list">
    <a href="home.html" class="nav_link ${getChapChild(
      "/guru/pages/home.html"
    )}">
      <i class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Beranda</span>
    </a>
    <a href="nilai.html" class="nav_link ${getChapChild(
      "/guru/pages/nilai.html"
    )}">
      <i class='bx bx-user nav_icon'></i> <span class="nav_name">Daftar Nilai</span>
    </a>
    <a href="#" class="nav_link">
      <i class='bx bx-message-square-detail nav_icon'></i> <span class="nav_name">KKM</span>
    </a>
  </div>
</div>
<a href="#" class="nav_link" id="logout"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </a>
`;

document.getElementById("logout").addEventListener("click", () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("pass");
  window.location = "../";
});
