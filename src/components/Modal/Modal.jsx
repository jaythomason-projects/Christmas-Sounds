import React from 'react';
import PropTypes from 'prop-types';
import { greetings } from './greetings.js';

const Modal = ({ name, setShowModal }) => {
    const greeting = greetings.find(greeting => greeting.name === name);
    const fullName = greeting ? greeting.fullName : name;
    const defaultMessage = `
        Wishing you a very merry Christmas and a happy new year!
        Take a moment to unwind and embrace the joyful spirit of the holiday season with these soothing Christmas sounds.
        May they provide a delightful ambiance as you get ready for Christmas day.`;
    const message = greeting && greeting.message !== '' ? greeting.message : defaultMessage;

    return (
        <>
            <div className="overlay"></div>
            <dialog className="modal" open>
                <div>
                    <h2>Merry Christmas, {fullName}!</h2>
                    <p>{message}</p>
                    <button onClick={() => setShowModal(false)}>Go</button>
                </div>
            </dialog>
        </>
    );
};

Modal.propTypes = {
    name: PropTypes.string.isRequired,
    setShowModal: PropTypes.func.isRequired,
};

export default Modal;