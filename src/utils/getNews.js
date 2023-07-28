import axios from 'axios';

const apiKey = import.meta.env.VITE_APP_API_KEY;

export const getNews = async () => {
  try {
    const newsData = await axios.get(`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=${apiKey}`);
    const results = newsData.data.response.results;
    console.log('results', newsData)
    const articles = results.map((article) => (
    {
      headline: article.fields.headline,
      imageSrc: article.fields.thumbnail,
      id: article.id
    }
  ))
    return { articles };
  } catch (error) {
    return { articles: [], error: error.message };
  }
}