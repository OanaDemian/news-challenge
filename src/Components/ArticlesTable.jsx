import ArticleHeadline from "./ArticleHeadline.jsx";
import './ArticlesTable.css';
  
const ArticlesTable = props => {

  const  articles  = props.mockArticlesData.mockApiResponse.response.results;

  
    // let lastArticle = null;
    // let articleRows = [];

    // articles.forEach(article => {
    //   articleRows.push(<Article key={article.id} article={article} headline={article.fields.headline} image={article.fields.thumbnail} />);
    //     lastArticle = article.id;
    // });
      return (
        <table className="articles-table">
          <thead>
          <tr>
              <th className="daily-headlines">Today's Headlines</th>
          </tr>
          </thead>
          <tbody>
            {articles.map(article => 
              <ArticleHeadline key={article.id} article={article} headline={article.fields.headline} imageSrc={article.fields.thumbnail} />
            )}
          </tbody>
        </table>
    );
};


export default ArticlesTable;