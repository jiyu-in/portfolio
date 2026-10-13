import {
  PlaceholderSidebar,
  PlaceholderPanel,
  PlaceholderLabel,
  PlaceholderLayout,
  PlaceholderContent,
  Placeholder,
} from './styles/ProjectPlaceholder.styles';
import { notebookData } from '../data/notebookData';
export default function ProjectPlaceholder({ className }) {
  return (
    <Placeholder className={className}>
      <PlaceholderLabel>{notebookData.previewLabel}</PlaceholderLabel>
      <PlaceholderLayout aria-hidden="true">
        <PlaceholderSidebar />
        <PlaceholderContent>
          <PlaceholderPanel />
          <PlaceholderPanel />
        </PlaceholderContent>
      </PlaceholderLayout>
    </Placeholder>
  );
}
