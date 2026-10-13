import BackgroundScene from './BackgroundScene';
import {
  previewScenes,
  scrollPortfolioData,
} from '../data/scrollPortfolioData';
export default function ProjectPreviewSection() {
  return (
    <BackgroundScene
      id="preview"
      title={scrollPortfolioData.previewTitle}
      scenes={previewScenes}
    />
  );
}
