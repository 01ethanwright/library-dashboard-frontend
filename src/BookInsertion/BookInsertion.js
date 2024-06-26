import React, { useState } from 'react';
import Modal from '../Views/Modal';
import axios from 'axios';
import UserProfile from './../Components/UserProfile';
import AddBookForm from './AddBookForm';
import './BookInsertion.css';


const BookInsertion = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
        setModalOpen(false);
    }

    return (
        <div className="BookInsertion">
            <button onClick={() => setModalOpen(true)}>Add Book</button>
            {UserProfile.isEmployee() && (
                <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                    <div>
                        <div className="ModalMainContent">
                            <h1 className="ModalTitle">Add a Book</h1>
                             <AddBookForm />
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default BookInsertion;