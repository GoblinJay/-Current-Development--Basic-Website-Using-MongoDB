import React, { useState } from 'react';

const Bio = () => {
    const [bio, setBio] = useState('');

    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    const handleBioSubmit = (event) => {
        event.preventDefault();
        // Logic to save the bio can be added here
        console.log('Bio submitted:', bio);
    };

    return (
        <div className="bio-container">
            <h2>Edit Your Biography</h2>
            <form onSubmit={handleBioSubmit}>
                <textarea
                    value={bio}
                    onChange={handleBioChange}
                    placeholder="Tell us about yourself..."
                    rows="5"
                    cols="50"
                />
                <br />
                <button type="submit">Save Bio</button>
            </form>
            <div className="bio-display">
                <h3>Your Biography:</h3>
                <p>{bio}</p>
            </div>
        </div>
    );
};

export default Bio;