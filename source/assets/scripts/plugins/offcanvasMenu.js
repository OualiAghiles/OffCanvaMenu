export default class OffCanvaNav {
  /**
   * Creates an instance of OffCanvaNav.
   * @param {String} btn className of the button handler
   * @param {String} nav ClassName of element to be shown
   * @memberof OffCanvaNav
   */
  constructor(btn, nav) {
    this.btn = document.querySelector(btn)
    this.nav = document.querySelector(nav)
    this.active = false
    this.toggleStat()
    this.btn.addEventListener('click', this.handleButton.bind(this))
  }

  /**
   * btn handler
   * @param {Event} e 
   */
  handleButton(e) {
    e.stopImmediatePropagation();
    if (this.active) {
      this.hide()
    } else {
      this.show()
    }
  }

  /**
   * method to show element 
   */
  show() {
    this.btn.classList.add('active')
    this.nav.classList.add('active')
    this.active = true
    this.addEventListeners()
  }
  /**
   * methode to hide element
   */
  hide() {
    this.btn.classList.remove('active')
    this.nav.classList.remove('active')
    this.active = false
  }

  /**
   * init listeners on window after whowing element
   */
  addEventListeners() {
    window.addEventListener('click', this.windowCloseClickRef = this.windowCloseClick.bind(this))
    window.addEventListener('keyup', this.handleEscRef = this.handleEsc.bind(this))
  }

  /**
   * target the click to hide or not the element
   * @param {Event} e 
   */
  windowCloseClick(e) {
    // add condition to close the sidebar event with the clsoe btn
    if (e.target.closest('aside') === null || e.target.closest('.close')) {
      this.hide()
      window.removeEventListener('click', this.windowCloseClickRef)
    }
  }
  /**
   * target the keyup Escape to hide
   * @param {Event} e 
   */
  handleEsc(e) {
    if (e.key === 'Escape') {
      this.hide()
      window.removeEventListener('keyup', this.handleEscRef)
    }
  }
  toggleStat() {
    const main = document.querySelector('.intro')
    const topbar = document.querySelector('.topnav')
    const options = {
      rootMargin: '-80% 0px 0px 0px'
    }
    // const observer = new IntersectionObserver((observers) => {
    //   observers.forEach(observer => {
    //     if (!observer.isIntersecting) {
    //       topbar.classList.add('inverted')
    //     } else {
    //       topbar.classList.remove('inverted')
    //     }
    //   });


    // }, options)
    // observer.observe(main)
  }

}