import React, { useState } from 'react';

const Certifications = () => {
    const [certifications, setCertifications] = useState([]);
    const [newCertification, setNewCertification] = useState('');

    const handleAddCertification = () => {
        if (newCertification) {
            setCertifications([...certifications, newCertification]);
            setNewCertification('');
        }
    };

    const handleRemoveCertification = (index) => {
        const updatedCertifications = certifications.filter((_, i) => i !== index);
        setCertifications(updatedCertifications);
    };

    return (
        <div className="certifications">
            <h2>Certifications</h2>
            <input
                type="text"
                value={newCertification}
                onChange={(e) => setNewCertification(e.target.value)}
                placeholder="Add a new certification"
            />
            <button onClick={handleAddCertification}>Add</button>
            <ul>
                {certifications.map((certification, index) => (
                    <li key={index}>
                        {certification}
                        <button onClick={() => handleRemoveCertification(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Certifications;