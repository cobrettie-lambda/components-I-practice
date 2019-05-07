// Steps to creating components

// STEP 3.) Create Panel Class (constructor)
class Panel {
  constructor(panel) {
    this.panel = panel;
    this.panelButtons = this.panel.querySelector(".panel-buttons");
    this.panelBtnOpen = this.panel.querySelector(".panel-btn-open");
    this.panelBtnClose = this.panel.querySelector(".panel-btn-close");
    this.panelContent = this.panel.querySelector(".panel-content");

    // EXPLICIT BINDING with .bind
    this.panelButtons.addEventListener("click", this.togglePanel.bind(this));

    // FAT ARROWS
    this.panelButtons.addEventListener("click", () => this.togglePanel());
  }
  // different scope block
  togglePanel() {
    // When only one argument is present: Toggle the class value, i.e., if the class exists then remove it and return false, if not, then add it and return true

    // console.log('I was clicked');
    this.panelBtnOpen.classList.toggle("hide-btn");
    this.panelBtnClose.classList.toggle("hide-btn");
    this.panelContent.classList.toggle("toggle-on");
  }
}

// STEP 1.) Select some DOM elements that we might use a lot

const originalPanels = document.querySelectorAll(".panel");
// console.log(originalPanels);

// STEP 2.) Return newly constructed DOM elements
originalPanels.forEach(function(panel) {
  // console.log(panel);
  return new Panel(panel);
});
