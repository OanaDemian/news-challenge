const ArticleHeadline = ({article, headline, imageSrc}) => {
  return (
    <tr>
      <td>
        <img src={imageSrc} height="100" width="100" />
        {headline}
      </td>
    </tr>
  );
};

export default ArticleHeadline;
