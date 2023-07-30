import ArticleRow from "./ArticleRow.jsx";
import { getNews } from '../utils/getNews.js';
import { useEffect } from "react";
import { useState } from "react";
import './ArticlesTable.css';

const ArticlesTable = () => {
  const [articles, setArticles] = useState([{
    headline: "Loading ...",
    imageSrc: '',
    id: '0'
  }]);

  useEffect(() => {
    getArticlesData();
  }, []);

  const getArticlesData = () => {
    getNews().then(response => {
      if (response.error === undefined) {
        setArticles(response.articles)
      } else {
        setArticles([{
    headline: response.error,
    imageSrc: '',
    id: '0'
  }])
      }
    })
  }
  
  return (
    <table className="articles-table">
      <thead>
        <tr>
          <th className="daily-headlines">Today&#39;s Headlines</th>
        </tr>
      </thead>
      <tbody>
        {articles.map(article => 
          <ArticleRow key={article.id} article={article} />
        )}
      </tbody>
    </table>
    );
};

export default ArticlesTable;
