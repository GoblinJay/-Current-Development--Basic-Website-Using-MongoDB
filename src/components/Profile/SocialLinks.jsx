import React, { useState } from 'react';

const SocialLinks = () => {
    const [links, setLinks] = useState({
        facebook: '',
        twitter: '',
        linkedin: '',
        github: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLinks({
            ...links,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to save social links (e.g., API call)
        console.log('Social Links Submitted:', links);
    };

    return (
        <div className="social-links">
            <h2>Social Links</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Facebook:
                        <input
                            type="url"
                            name="facebook"
                            value={links.facebook}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Twitter:
                        <input
                            type="url"
                            name="twitter"
                            value={links.twitter}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        LinkedIn:
                        <input
                            type="url"
                            name="linkedin"
                            value={links.linkedin}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        GitHub:
                        <input
                            type="url"
                            name="github"
                            value={links.github}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Save Links</button>
            </form>
        </div>
    );
};

export default SocialLinks;