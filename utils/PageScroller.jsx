import raf from "raf"
import TWEEN from "@tweenjs/tween.js"


const headerHeight = 45


function getPageOffset(element) {
  /*
  * Get the absolute position of an element on the page
  */
  let bounds = element.getBoundingClientRect()
  let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop

  return {
    top: bounds.top + scrollTop,
    left: bounds.left + scrollLeft
  }
}


function scrollToElement(element, duration=1500) {
  /*
  * Vertically scroll to an element over the given duration
  */
  const targetPosition = {
    x: 0,
    y: getPageOffset(element).top - headerHeight
  }
  // Starting coordinates
  let coords = {
    x: window.pageXOffset,
    y: window.pageYOffset
  }

  new TWEEN.Tween(
    coords
  ).to(
    targetPosition,
    duration
  ).easing(
    TWEEN.Easing.Quadratic.Out
  ).onUpdate(
    function() {
      window.scrollTo(coords.x, coords.y)
    }
  ).start()

  function animate() {
    raf(animate)
    TWEEN.update()
  }
  animate()
}


export default scrollToElement
