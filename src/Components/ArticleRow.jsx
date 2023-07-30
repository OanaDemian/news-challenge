import PropTypes from 'prop-types'; 
import './ArticleRow.css';

const ArticleRow = ({ article }) => {
  return (
    <tr>
      <td className="article-container">
        <img src={article.imageSrc} />
        <h2 className="article-headline">{article.headline}</h2>
      </td>
    </tr>
  );
};

ArticleRow.propTypes = {
  article: PropTypes.exact({
    headline: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    id: PropTypes.string
  })
}

export default ArticleRow;
