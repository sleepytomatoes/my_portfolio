import React from 'react';
import Icon1 from '../../images/screenshot1.jpeg';
import Icon2 from '../../images/screenshot2.jpeg';
import Icon3 from '../../images/screenshot3.jpeg';

import {
    ProjectsContainer, 
    ProjectsH1, 
    ProjectsWrapper, 
    ProjectsCard, 
    ProjectsIcon, 
    ProjectsH2, 
    ProjectsP
} from './ProjectsElements';

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
          <ProjectsWrapper>
           <ProjectsCard>
               <ProjectsIcon src={Icon1} />
               <ProjectsH2>Work Day Scheduler</ProjectsH2>
               <ProjectsP>description of project...</ProjectsP>
           </ProjectsCard> 
           <ProjectsCard>
               <ProjectsIcon src={Icon2}/>
               <ProjectsH2>Employee Directory</ProjectsH2>
               <ProjectsP>description of project...</ProjectsP>
           </ProjectsCard> 
           <ProjectsCard>
               <ProjectsIcon src={Icon3}/>
               <ProjectsH2>Eat Da Burger</ProjectsH2>
               <ProjectsP>description of project...</ProjectsP>
           </ProjectsCard> 
        </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
