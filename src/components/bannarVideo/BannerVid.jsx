import React, { useState } from 'react'

import './bannerVid.css'

import ReactPlayer from 'react-player';
import videoUrl from '../../assets/images/video/production_id_5091093 (1080p).mp4';
import cover from '../../assets/images/video/cover.jpg';
import Modal from 'react-bootstrap/Modal';
export default function BannerVid() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
        <div className='vidContainer'>
            <div className="imgItem">
                <img className='img-fluid' src={cover} alt="" />
            </div>
            <div className="overlayIcon">
                <button onClick={handleShow}>
                    <span>play</span>
                </button>
            </div>
        </div>
            <Modal  dialogClassName="modalAdjust" show={show} onHide={handleClose}>
                <Modal.Body>
                    <ReactPlayer
                        url={videoUrl}
                        width='100%'
                        height='500px'
                        playing
                        controls
                    />
                </Modal.Body>

            </Modal>
        </div>
    )
}
