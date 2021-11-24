import { ObjectFormat, objectTransform, subscribeToData } from '@google/dscc'
import { Hello } from './Hello'
import ReactDOM from 'react-dom'

export function drawViz(data: ObjectFormat) {
  // Insert or replace the visualization element
  let element = document.getElementById('viz')
  if (element) {
    element.parentNode?.removeChild(element)
  }
  element = document.createElement('div')
  element.setAttribute("id", "viz")
  document.body.appendChild(element)

  // Actually render our component
  ReactDOM.render(<Hello />, element)
}

// Connect our drawViz function to Data Studio
subscribeToData(drawViz, { transform: objectTransform })