import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["mymodal"];
  connect() {
    this.step = 0;
    this.items = ["first-item", "second-item", "third-item", "second-col", "third-col", "fifth-col"];
  }
  
  open(e) {
    e.preventDefault();
    var modal = document.getElementById('mymodal');
    // target.classList.remove("z-0");
    
    modal.classList.remove("hidden");

    // document.getElementById('drawer').classList.remove('z-30');

    // modal.innerHTML += e.target.dataset.fields;
    var spotlight = document.getElementById("spotlight");
    var tooltip = document.getElementById("tooltip");
  
    var id = this.items[this.step];
    var elem = document.getElementById(id);
    var elemBound = elem.getBoundingClientRect();
    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    elem.style.transform = "translateX(1.2)";
    spotlight.style.top = `${elemBound.top - 10}px`;
    spotlight.style.left = `${elemBound.left - 10}px`;
    spotlight.style.width = `${elemBound.width + 20}px`;
    spotlight.style.height = `${elemBound.height + 20}px`;

    tooltip.style.top = `${elemBound.top + window.scrollY + tooltip.offsetHeight}px`;
    tooltip.style.left = `${elemBound.left + window.scrollX + elemBound.width / 2 - tooltip.offsetWidth / 2}px`;
    tooltip.classList.remove('hidden');
  }

  nextStep() {
    this.step = this.step + 1;
    if (this.step >= this.items.length) {
      this.close();
    }
    var id = this.items[this.step];
    var elem = document.getElementById(id);
    var elemBound = elem.getBoundingClientRect();
    var spotlight = document.getElementById("spotlight");
    var tooltip = document.getElementById("tooltip");
    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    elem.style.transform = "translateX(1.2)";
    spotlight.style.top = `${elemBound.top - 10}px`;
    spotlight.style.left = `${elemBound.left - 10}px`;
    spotlight.style.width = `${elemBound.width + 20}px`;
    spotlight.style.height = `${elemBound.height + 20}px`;

    tooltip.style.top = `${elemBound.top + window.scrollY + tooltip.offsetHeight}px`;
    tooltip.style.left = `${elemBound.left + window.scrollX + elemBound.width / 2 - tooltip.offsetWidth / 2}px`;
    tooltip.classList.remove('hidden');
  }

  prevStep() {
    if (this.step <= 0) {
      this.close();
    }
    this.step = this.step - 1;
    var id = this.items[this.step];
    var elem = document.getElementById(id);
    var elemBound = elem.getBoundingClientRect();
    var spotlight = document.getElementById("spotlight");
    var tooltip = document.getElementById("tooltip");
    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    elem.style.transform = "translateX(1.2)";
    spotlight.style.top = `${elemBound.top - 10}px`;
    spotlight.style.left = `${elemBound.left - 10}px`;
    spotlight.style.width = `${elemBound.width + 20}px`;
    spotlight.style.height = `${elemBound.height + 20}px`;

    tooltip.style.top = `${elemBound.top + window.scrollY + tooltip.offsetHeight}px`;
    tooltip.style.left = `${elemBound.left + window.scrollX + elemBound.width / 2 - tooltip.offsetWidth / 2}px`;
    tooltip.classList.remove('hidden');
  }

  close() {
    this.step = 0;
    var modal = document.getElementById('mymodal');
    modal.classList.add("hidden");
  
    // document.getElementById('drawer').classList.add('z-30');
    // modal.innerHTML = "";
  }

}
