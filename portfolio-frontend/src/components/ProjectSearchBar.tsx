import React, { useState } from 'react';
import { SearchProps } from '../types';
import Card from './Card';
import AnimatedSection from './Animator';

const ProjectSearchBar: React.FC<SearchProps> = ({ dataToFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    // By default, display all projects
    const filteredData = searchTerm
        ? dataToFilter.filter(project =>
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.tools.some(tool => tool.toLowerCase().includes(searchTerm))
        )
        : dataToFilter; // Show all projects if search is empty

    return (
        <div className="form-control flex flex-col">
            <AnimatedSection>
                <div className='flex justify-center items-center mx-2'>
                    <input 
                        className="input input-bordered w-full md:w-3/6 " 
                        type="text" 
                        placeholder="Type something"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                        />
                </div>
            </AnimatedSection>

            {/* Display Filtered Results (or all by default) */}
            
            <div className='flex-center m-1 p-2 '>
                <div className="mt-10 mb-10 space-y-10 md:mt-4 md:space-y-4">
                    {filteredData.length > 0 ? (
                        filteredData.map(project => (
                            <AnimatedSection>
                                <Card
                                key={project.id}
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                tools={project.tools}
                                githubUrl={project.githubUrl}
                                />
                            </AnimatedSection>
                        ))
                    ) : (
                        <p className='flex justify-center items-center text-center m-4'>Oops! Couldn't find any project. It's probably something Aaron hasn't worked on yet! 😅</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectSearchBar;
