import React, { useRef, useEffect, useState } from 'react';
import './index.css';

const Modal = ({isOpen, id, title, onClose, openBtnRef, children}) => {
    const modalCloseBtnRef = useRef([]);
    const modalRef = useRef(null);
    const [focusableElements, setFocusableElements] = useState(null);
    const bodyFocusHandler = (evt) => {
        if (focusableElements.length > 0) {
            if(evt.target === modalRef.current) {
                try {
                    focusableElements[0].focus();
                } catch (error) {
                    
                }
            }
        }
    };
    const tabHandler = (evt) => {
        const { target, shiftKey } = evt;
        if (!shiftKey && focusableElements.indexOf(target) === focusableElements.length - 1 ) {
            evt.preventDefault();
            focusableElements[0].focus();
        }
        if (shiftKey && focusableElements.indexOf(target) === 0 ) {
            evt.preventDefault();
            focusableElements[focusableElements.length - 1].focus();
        }
    }

    const keyDownHandler = (evt) => {
        const code = evt.keyCode;
        if (code === 27) {
            return onClose()
        }
        if (code === 9) {
            return tabHandler(evt);
        }
    }

    useEffect(() => {
        if (isOpen) {
            isOpen && modalCloseBtnRef.current.focus();
            setFocusableElements([...modalRef.current.querySelectorAll(
                'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
            )]);
            document.addEventListener('focus', bodyFocusHandler, true);
        }
        if (!isOpen) {
            openBtnRef.current.focus();
            setFocusableElements([]);
            document.removeEventListener('focus', bodyFocusHandler);
        }
    }, [isOpen]);

    return (
        isOpen && (
            <>
                <div
                    className="modal"
                    id={id}
                    role="dialog"
                    aria-label="title"
                    aria-labelledby={`modal-header-${id}`}
                    tabIndex="-1"
                    onKeyDown={(evt) => keyDownHandler(evt)}
                    ref={modalRef}
                >
                    <div className="modal__header">
                        <h2 id={`modal-header-${id}`}>{title}</h2>
                        <button
                            type="button"
                            aria-label="Close Modal"
                            onClick={() => onClose()}
                            ref={modalCloseBtnRef}
                            tabIndex="0"
                            className="modal__close-btn"
                        >
                            X
                        </button>
                    </div>
                    <div className="modal__body">
                        {children}
                    </div>
                </div>
                <div
                    tabIndex="-1"
                    className="modal-backdrop"
                    onClick={onClose}
                />
            </>
        )
    );
};

export default Modal;
