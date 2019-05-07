// Steps to creating components

// STEP 3.) Create Panel Class (constructor)
class Panel {
    constructor(panel) {
        this.panel = panel;
        this.panelButtons = this.panel.querySelector('.panel-buttons')
        this.panelButtonOpen = this.panel.querySelector('.panel-btn-open');
        this.panelButtonClose = this.panel.querySelector('.panel-btn-close');
        this.panelContent = this.panel.querySelector('.panel-content');
        this.panelButtons.addEventListener('click', this.togglePanel());

    }
    // different scope block
    togglePanel() {
        console.log('I was clicked');
    }
}

// STEP 1.) Select some DOM elements that we might use a lot

const originalPanels = document.querySelectorAll('.panel');
// console.log(originalPanels);


// STEP 2.) Return newly constructed DOM elements
originalPanels.forEach(function (panel) {
    // console.log(panel);
    return new Panel(panel);
});