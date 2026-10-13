import { notebookData } from '../data/notebookData';
import { siteData } from '../data/siteData';
import { Root } from './styles/SelectedWorks.styles';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projectData } from '../data/projectData';

export default function SelectedWorks() {
  return (
    <Root id="work" className="container" aria-labelledby="work-title">
      <SectionTitle id="work-title" count={projectData.length}>
        {siteData.works.title}
      </SectionTitle>
      <p className="notebook-intro">{notebookData.notebookDescription}</p>
      <div className="archive-grid">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Root>
  );
}
