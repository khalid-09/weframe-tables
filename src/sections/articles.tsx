import InterestedArticles from '@/components/acticles/interested/interested-articles';
import SimilarArticles from '@/components/acticles/similar/similar-acticles';

/**
 * Article Component
 * This component is used to display individual product which the user might be interested in or similar to their preferences.
 */

const Articles = () => {
  return (
    <section>
      <SimilarArticles />
      <InterestedArticles />
    </section>
  );
};

export default Articles;
