import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ name, setShowModal }) => {
    const properCaseName = name.charAt(0).toUpperCase() + name.slice(1);
    const message = `
    Wishing you a very merry Christmas and a happy new year!
    Take a moment to unwind and embrace the joyful spirit of the holiday season with these soothing Christmas sounds.
    May they provide a delightful ambiance as you get ready for Christmas day.`;

    return (
        <>
            <div className="overlay"></div>
            <dialog className="modal" open>
                <div className="modal__content">
                    <h2 className="modal__title">Merry Christmas, {properCaseName}!</h2>
                    <p>{message}</p>
                    <button
                        className="modal__button"
                        onClick={() => setShowModal(false)}
                    >
                        Go
                    </button>
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