import './ArticleHeadline.css';
const ArticleHeadline = ({ article, headline, imageSrc }) => {
  return (
    <tr>
      <td className="article-container">
        <img src={imageSrc} />
        <h2 className="article-headline">{headline}</h2>
      </td>
    </tr>
  );
};

export default ArticleHeadline;
