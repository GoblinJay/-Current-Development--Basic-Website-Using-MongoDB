import React, { useState } from 'react';

const Skills = () => {
    const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js']);
    const [newSkill, setNewSkill] = useState('');

    const handleAddSkill = () => {
        if (newSkill) {
            setSkills([...skills, newSkill]);
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };

    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        {skill}
                        <button onClick={() => handleRemoveSkill(skill)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input 
                type="text" 
                value={newSkill} 
                onChange={(e) => setNewSkill(e.target.value)} 
                placeholder="Add a new skill" 
            />
            <button onClick={handleAddSkill}>Add Skill</button>
        </div>
    );
};

export default Skills;