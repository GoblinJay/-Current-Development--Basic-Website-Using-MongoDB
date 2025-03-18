import React, { useState } from 'react';

const Education = () => {
    const [educationList, setEducationList] = useState([]);
    const [institution, setInstitution] = useState('');
    const [degree, setDegree] = useState('');
    const [year, setYear] = useState('');

    const handleAddEducation = () => {
        if (institution && degree && year) {
            setEducationList([...educationList, { institution, degree, year }]);
            setInstitution('');
            setDegree('');
            setYear('');
        }
    };

    return (
        <div className="education-section">
            <h2>Education</h2>
            <div>
                <input
                    type="text"
                    placeholder="Institution"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Degree"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <button onClick={handleAddEducation}>Add Education</button>
            </div>
            <ul>
                {educationList.map((edu, index) => (
                    <li key={index}>
                        {edu.degree} from {edu.institution} ({edu.year})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;