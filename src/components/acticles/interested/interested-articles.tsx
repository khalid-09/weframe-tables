import ArticleCard from '../article-card';
import Heading from '../heading';

/**
 * InterestedArticles component
 * This component is used to display the articles which the user might be interested in based on their preferences.
 */

const InterestedArticles = () => {
  return (
    <div className="mt-20 space-y-4 mb-20 md:px-8 px-4">
      <Heading heading="Ces produits pourraient vous intéresser" />
      <div className="flex  items-center  gap-3 md:flex-row flex-col">
        {Array.from({ length: 3 }).map((_, index) => (
          <ArticleCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default InterestedArticles;
