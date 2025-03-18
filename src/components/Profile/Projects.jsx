import React, { useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const handleAddProject = () => {
        if (projectName && projectDescription) {
            setProjects([...projects, { name: projectName, description: projectDescription }]);
            setProjectName('');
            setProjectDescription('');
        }
    };

    return (
        <div className="projects">
            <h2>Projects</h2>
            <div>
                <input
                    type="text"
                    placeholder="Project Name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                />
                <textarea
                    placeholder="Project Description"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                />
                <button onClick={handleAddProject}>Add Project</button>
            </div>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;