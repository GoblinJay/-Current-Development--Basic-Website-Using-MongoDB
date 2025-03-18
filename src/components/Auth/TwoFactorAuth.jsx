import React, { useState } from 'react';

const TwoFactorAuth = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically verify the code with your backend
        if (code === '123456') { // Example code for demonstration
            setSuccess(true);
            setError('');
        } else {
            setError('Invalid code. Please try again.');
            setSuccess(false);
        }
    };

    return (
        <div className="two-factor-auth">
            <h2>Two-Factor Authentication</h2>
            {success ? (
                <p>Authentication successful! You can now access your account.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="code">Enter the code sent to your device:</label>
                    <input
                        type="text"
                        id="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                    <button type="submit">Verify</button>
                    {error && <p className="error">{error}</p>}
                </form>
            )}
        </div>
    );
};

export default TwoFactorAuth;