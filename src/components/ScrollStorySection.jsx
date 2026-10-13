import BackgroundScene from './BackgroundScene';
import { storyScenes, scrollPortfolioData } from '../data/scrollPortfolioData';
export default function ScrollStorySection() {
  return (
    <BackgroundScene
      id="story"
      title={scrollPortfolioData.storyTitle}
      scenes={storyScenes}
    />
  );
}
