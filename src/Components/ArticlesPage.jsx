import mockArticlesData from '../../mockNewsData.json';
import ArticlesTable from './ArticlesTable';
const ArticlesPage = () => {
  return (
    <>
      <ArticlesTable mockArticlesData={mockArticlesData} />
    </>
  )
}

export default ArticlesPage;

