import PropTypes from 'prop-types'; 
import { useState } from 'react';
import './ArticleRow.css';

const ArticleRow = ({ article }) => {

  const [expanded, setExpanded] = useState(false);

  const handleCLick = () => {
    setExpanded(!expanded);
  }
  
  return (
    <tr onClick={() => handleCLick()}>
      <td className="article-container">
        <img src={article.imageSrc} />
          <h2 className="article-headline">{article.headline}</h2>
        {expanded && <a href={article.url}>
          <p className="article-summary"> {article.summary}</p>
        </a>}
      </td>
    </tr>
  );
};

ArticleRow.propTypes = {
  article: PropTypes.exact({
    headline: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    id: PropTypes.string
  })
}

export default ArticleRow;
