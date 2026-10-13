import { notebookData } from '../data/notebookData';
import { Placeholder } from './styles/ProjectPlaceholder.styles';
export default function ProjectPlaceholder({ className }) {
  return (
    <Placeholder className={className}>
      <p className="placeholder-label">{notebookData.previewLabel}</p>
      <div className="placeholder-layout" aria-hidden="true">
        <div className="placeholder-sidebar" />
        <div className="placeholder-content">
          <div className="placeholder-panel" />
          <div className="placeholder-panel" />
        </div>
      </div>
    </Placeholder>
  );
}
