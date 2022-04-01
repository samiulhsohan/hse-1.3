import {_} from './selector.js'

export const startGame = () => {
  _('#intro').style.display = 'none'
  _('#question').style.display = 'block'
}

export const setEffectLayerImages = styleVariant => {
  const effectLayer = _('#effect-layer')
  const images = `
    <img class="bounce-1" src="img/${styleVariant}/01.png" alt="" />
    <img class="bounce-2" src="img/${styleVariant}/02.png" alt="" />
    <img class="bounce-3" src="img/${styleVariant}/03.png" alt="" />
    <img class="bounce-4" src="img/${styleVariant}/04.png" alt="" />
  `
  effectLayer.innerHTML = images
}

export const hideEffectLayerImages = () => {
  Array.from(Array(4)).forEach((i, idx) => {
    _(`.bounce-${idx + 1}`).style.opacity = '0'
  })
}

export const showEffectLayerImages = () => {
  Array.from(Array(4)).forEach((i, idx) => {
    _(`.bounce-${idx + 1}`).style.opacity = '1'
  })
}

export const hideQuestion = () => {
  _('#test').style.opacity = '0'
}

export const showQuestion = () => {
  _('#test').style.opacity = '1'
}

export const disableOptions = () => {
  const optionElements = document.querySelectorAll('.option')
  optionElements.forEach(optionElement => {
    optionElement.style.cursor = 'default'
    optionElement.disabled = true
  })
}

export const enableOptions = () => {
  const optionElements = document.querySelectorAll('.option')
  optionElements.forEach(optionElement => {
    optionElement.style.cursor = 'pointer'
    optionElement.disabled = false
  })
}
