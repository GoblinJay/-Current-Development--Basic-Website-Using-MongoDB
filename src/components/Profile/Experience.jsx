import React, { useState } from 'react';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

    const handleAddExperience = () => {
        const newExperience = {
            company,
            position,
            startDate,
            endDate,
            description,
        };
        setExperiences([...experiences, newExperience]);
        clearForm();
    };

    const clearForm = () => {
        setCompany('');
        setPosition('');
        setStartDate('');
        setEndDate('');
        setDescription('');
    };

    return (
        <div className="experience-section">
            <h2>Work Experience</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddExperience(); }}>
                <input
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Experience</button>
            </form>
            <ul>
                {experiences.map((exp, index) => (
                    <li key={index}>
                        <h3>{exp.position} at {exp.company}</h3>
                        <p>{exp.startDate} - {exp.endDate || 'Present'}</p>
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;