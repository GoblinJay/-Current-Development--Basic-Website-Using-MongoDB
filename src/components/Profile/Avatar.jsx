import React, { useState } from 'react';

const Avatar = () => {
    const [avatar, setAvatar] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="avatar-container">
            <h2>Profile Avatar</h2>
            {avatar ? (
                <img src={avatar} alt="Profile Avatar" className="avatar-image" />
            ) : (
                <div className="avatar-placeholder">No Avatar Uploaded</div>
            )}
            <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
    );
};

export default Avatar;