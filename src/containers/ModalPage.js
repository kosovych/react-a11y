import React, { useState, useRef } from 'react';
import Modal from '../components/Modal';

const ModalPage = () => {
    const [isOpen, setOpen] = useState(false);
    const openBtnRef = useRef(null);

    return (
        <>
            <a
                href="vscode://file/Users/kosovych/Documents/projects/react-a11y/src/components/Modal/index.js"
                aria-label="Link to file"
            >
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 234 235.1" width="40" height="52">
                    <path
                        class="st0"
                        fill="#0179cb"
                        d="M83.3 143.9l-58 45.2L0 176.5V58.7L25.2 46l57.6 45.3L174 0l60 23.9v186.9l-59.7 24.3-91-91.2zm88.9 15.9V75.3l-54.6 42.3 54.6 42.2zM27.3 144.6L56 118.5 27.3 89.9v54.7z"
                    />
                </svg>
            </a>
            <br />
            <button
                onClick={() => setOpen(!isOpen)}
                ref={openBtnRef}
            >
                Open Modal
            </button>
            <Modal
                isOpen={isOpen}
                id="test-modal"
                title="Lorem ipsum dolor"
                openBtnRef={openBtnRef}
                onClose={() => setOpen(false)}
            >
                <p style={{margin: 0}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga pariatur dolores neque et omnis, praesentium fugit
                    possimus voluptate nam, veniam iusto ut. Doloremque dolorem
                    officiis perferendis ut consequatur!
                    <a href="blank.html"> Facere nemo quod </a>
                    eius quos sapiente officia suscipit quia laboriosam
                    totam at non inventore eveniet,
                    <a href="blank.html"> laudantium fuga quas </a>
                    illo unde maiores eos quis, nulla, error labore ducimus
                    minima ab? Hic, nobis. Deserunt atque facilis distinctio,
                    ad culpa at vero dolorum ipsa facere unde maiores a, fuga
                    aliquam consequuntur similique quaerat corrupti ex magni
                    quibusdam autem dolorem dolore sunt iusto aperiam! Natus
                    porro itaque voluptatum fugiat, pariatur nobis illum illo
                    nemo deleniti tenetur?
                </p>
            </Modal>
        </>
    )
};

export default ModalPage;
