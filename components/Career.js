function Career() {
  const Career = document.getElementById("Careers");
  const Container = document.createElement("div");
  Container.classList.add("container", "py-5");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 gy-5 align-items-center">
    <div class="col text-body">
      <h2 class="title fw-bold">Work With CodeX Talentd Community</h2>
      <p class="mt-2">
        Don’t see an exact match? No problem! Join our Talented
        Community and Convert Your Idea into Innovation.
      </p>
      <a class="button btn-theme-default mt-3" href="https://wa.link/7ymh5n"> Schedule call </a>
    </div>
    <div class="col container-body">
      <img
        class="img-fluid"
        src="./Images/career-illustration.png"
        alt=""
      />
    </div>
  </div>
    `;
  Career.appendChild(Container);
}
Career();
