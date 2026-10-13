import {
  WorksDescription,
  WorksGrid,
  Root,
} from './styles/SelectedWorks.styles';
import { notebookData } from '../data/notebookData';
import { siteData } from '../data/siteData';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projectData } from '../data/projectData';
export default function SelectedWorks() {
  return (
    <Root id="work" aria-labelledby="work-title">
      <SectionTitle id="work-title" count={projectData.length}>
        {siteData.works.title}
      </SectionTitle>
      <WorksDescription>{notebookData.notebookDescription}</WorksDescription>
      <WorksGrid>
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </WorksGrid>
    </Root>
  );
}
