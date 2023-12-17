function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div
  class="text-body text-center d-flex flex-column align-items-center"
>
  <h2 class="title fw-bold">"Innovate, Integrate, Ignite: Crafting Tomorrow's Web Experience!"</h2>
  <p class="">
  "Embrace the challenges, seek the opportunities, and remember: your journey is the canvas of your success. Every step forward is a brushstroke, painting the masterpiece of your aspirations."
  </p>
</div>
<div
  class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-1.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Strategic Vision</div>
      <div class="description text-center">
      Develop a forward-thinking strategic vision that aligns technology solutions with broader business objectives. Seek to understand and anticipate industry shifts, enabling the agency to proactively contribute to clients' success and growth.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-3.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">User-Centric Design</div>
      <div class="description text-center">
      Place user experience at the forefront of design and development processes. Craft solutions that are intuitive, efficient, and enjoyable for end-users. Prioritize usability, accessibility, and user feedback to create impactful and user-friendly applications.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-5.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Communication</div>
      <div class="description text-center">
      Establish a culture of transparent communication, both internally and with clients. Ensure that expectations, timelines, and project progress are communicated openly. Foster a collaborative environment where feedback is valued and ideas are exchanged freely.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-7.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Quality Assurance</div>
      <div class="description text-center">
      Commit to delivering high-quality solutions by implementing rigorous testing and quality assurance processes. Strive for error-free products, emphasizing reliability, scalability, and performance to guarantee a positive and consistent user experience.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-2.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Sustainable Development</div>
      <div class="description text-center">
      Adopt sustainable development practices that consider the environmental impact of technology solutions. Seek energy-efficient infrastructure, optimize resource usage, and promote eco-friendly practices to contribute positively to both business and society.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-8.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Responsibility</div>
      <div class="description text-center">
      Operate with a strong sense of ethical responsibility. Uphold the highest standards of integrity, honesty, and fairness in all interactions. Engage in social responsibility initiatives that contribute to the well-being of communities and the broader global society.
      </div>
    </div>
  </div>
</div>
    `;
  Features.appendChild(Container);
}
Features();
