import ArticleRow from "./ArticleRow.jsx";
// import mockArticlesData from '../../mockNewsData.json';
import './ArticlesTable.css';
import { getNews } from '../utils/getNews.js';
import { useEffect } from "react";
import { useState } from "react";

const ArticlesTable = () => {
  const [articles, setArticles] = useState(['... loading']);

  useEffect(() => {
    getArticlesData();
  }, []);

  const getArticlesData = () => {
    const articlesData = getNews().then(response => {
      console.log(response.articles)
      if (response.error === undefined) {
        setArticles(response.articles)
      } else {
        setArticles(response.error)
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
