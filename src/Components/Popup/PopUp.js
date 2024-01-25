import React from 'react'
import './PopUp.css'

function PopUp({ children, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  )
}

export default PopUp