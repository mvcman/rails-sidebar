import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = []
  connect() {
    // if (localStorage.getItem("theme")) {
    //   let body = document.getElementById('body');
    //   if (localStorage.getItem("theme") === "night") {
    //     body.classList.add("dark");
    //     document.getElementById("theme-mode").innerHTML = `
    //       <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    //         <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"/>
    //       </svg>
    //     `;
    //   }
    // } else {
    //   localStorage.setItem("theme", "day");
    // }
    this.screenWidth = window.innerWidth || document.documentElement.clientWidth;
    window.addEventListener("resize", this.checkScreenWidth.bind(this));
    this.handleOpenNav();
    console.log("connecting");
    this.close();
  }

  disconnect() {
    // Remove the event listener when the controller disconnects
    window.removeEventListener("resize", this.checkScreenWidth.bind(this));
  }

  checkScreenWidth() {
    this.screenWidth = window.innerWidth || document.documentElement.clientWidth;
    // Adjust the screen width threshold as needed
    if (this.screenWidth >= 768) {
      this.open();
    } else {
      this.close();
    }
  }

//   toggleTheme() {
//     const body = document.getElementById("body");

//     if (localStorage.getItem("theme") === "day") {
//       document.getElementById('theme-mode').innerHTML = `
//         <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//           <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"/>
//         </svg>
//       `;
//       body.classList.add("dark");
//       localStorage.setItem("theme", "night");
//     } else {
//       document.getElementById('theme-mode').innerHTML = `
//         <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
//             <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"/>
//         </svg>
//       `;
//       body.classList.remove("dark");
//       localStorage.setItem("theme", "day");
//     }
//   }

  open() {
    const sidebar = document.getElementById("drawer");
    sidebar.classList.remove("-translate-x-full");
  }

  close() {
    const sidebar = document.getElementById("drawer");
    if (this.screenWidth <= 768) {
      sidebar.classList.add("-translate-x-full");
    }
  }

  openCloseNav(e) {
    const target = e.target.dataset.name;
    const element = document.getElementById(`${target}`);
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      localStorage.setItem(target, 'open');
      e.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" class="pointer-events-none"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14l-5-5l-5 5"/></svg>`;
      e.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      element.classList.add("hidden");
      localStorage.setItem(target, 'close');
      e.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" class="pointer-events-none"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" class="pointer-events-none"/></svg>`;
    }
  }

  handleOpenNav() {
    document.querySelectorAll('.menu').forEach((menu) => {
      const target = document.getElementById(menu.getAttribute('data-name'));
      if (localStorage.getItem(menu.getAttribute('data-name')) == "open") {
        target.classList.remove("hidden");
        menu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" class="pointer-events-none"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14l-5-5l-5 5"/></svg>`;
      } else {
        target.querySelectorAll('.submenu').forEach((submenu) => {
          if (!submenu.classList.contains("hidden")) {
            target.classList.remove("hidden");
            menu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" class="pointer-events-none"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14l-5-5l-5 5"/></svg>`;
            submenu.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }
        });
      }
    });
  }
}