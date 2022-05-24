import React from 'react'
import ReactDom from 'react-dom'

import logo from '../../assets/img/logo.svg'

import './index.css'

/**
 * Popup
 * @returns {JSX.Element}
 */
const PopupMain = () => {
  return (
    <div className="popup">
      <img src={logo} className="popup-logo" alt="logo" />

      <label className="popup-label">Bilistory v0.1.0</label>
    </div>
  )
}

ReactDom.render(<PopupMain />, window.document.querySelector('#root'))

//@ts-ignore
module?.hot?.accept?.()
