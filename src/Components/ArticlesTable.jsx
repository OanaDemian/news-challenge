import ArticleRow from "./ArticleRow.jsx";
import mockArticlesData from '../../mockNewsData.json';
import './ArticlesTable.css';
  
const ArticlesTable = () => {

  const articles = mockArticlesData.mockApiResponse.response.results;

  
    // let lastArticle = null;
    // let articleRows = [];

    // articles.forEach(article => {
    //   articleRows.push(<Article key={article.id} article={article} headline={article.fields.headline} image={article.fields.thumbnail} />);
    //     lastArticle = article.id;
    // });
  
  const viewArticle = articles.map((article) => (
    {
      headline: article.fields.headline,
      imageSrc: article.fields.thumbnail,
      id: article.id
    }
  ))
  
  return (
    <table className="articles-table">
      <thead>
      <tr>
          <th className="daily-headlines">Today's Headlines</th>
      </tr>
      </thead>
      <tbody>
        {viewArticle.map(article => 
          <ArticleRow key={article.id} article={article} />
        )}
      </tbody>
    </table>
    );
};


export default ArticlesTable;