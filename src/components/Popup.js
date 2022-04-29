import React from 'react'


function Popup(props) {

    return (
        <div className='modal'>
            <div className="modal_content">
                <span className="close" onClick={props.handleExit}>
                    &times;
                </span>
                <div className='popup_info'>
                    <h2>Please enter a to-do!</h2>
                </div>

            </div>
        </div>

    )
}

export default Popup