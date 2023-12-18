import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Header from '/src/components/Header/Header';
import Soundboard from '/src/components/Soundboard/Soundboard';
import Modal from '/src/components/Modal/Modal';

const HomePage = () => {
    const location = useLocation();
    const { name } = queryString.parse(location.search);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (name) {
            setShowModal(true);
        }
    }, [name]);

    return (
        <div>
            {showModal && <Modal name={name} setShowModal={setShowModal} />}
            <Header />
            <Soundboard />
        </div>
    );
};

export default HomePage;