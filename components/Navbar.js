function Navbar() {
  const navbar = document.getElementById("Navbar");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="nav-left d-flex" id="navbarNav">
  <a class="navbar-brand me-5" href="#">
    <img
      class="BrandLogo"
      src="./Images/Main Logo.png"
      alt=""
      srcset=""
    />
  </a>
  
</div>
<div class="nav-right d-flex align-items-center">
  <div class="badges-items me- d-none d-sm-block">
  <div class="btns-group">
  <a class="button btn-theme-default" href="https://wa.link/7ymh5n">Contact us</a>
</div>
  </div>
</div>

    `;
  navbar.appendChild(Container);
}
Navbar();
