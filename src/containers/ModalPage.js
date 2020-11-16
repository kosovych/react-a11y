import React, { useState, useRef } from 'react';
import Modal from '../components/Modal';

const ModalPage = () => {
    const [isOpen, setOpen] = useState(false);
    const openBtnRef = useRef(null);

    return (
        <>
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
