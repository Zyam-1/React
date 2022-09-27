import { string } from 'prop-types'
import React from 'react'

export default function Textbox(props) {
  return (
    <div><form>
    <div class="form-group container">
      <label for="exampleFormControlTextarea1">{props.heading}</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </form></div>
  )
}
Textbox.prop =  {
    heading: string

}