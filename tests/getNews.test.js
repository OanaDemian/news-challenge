// 1 - Test that getNews actually makes the external data call
// 2 - Test that a successful request returns the right data
// 3 - Test that an unsuccessful request returns the error

import axios from 'axios';

import { getNews } from '../src/utils/getNews.js';

import mockDataFile from './mockResults.json';

vi.mock(`axios`);

describe('getNews tests', () => {

    it('should actually make the external data call', async () => {
        // Arrange
        // When you come across the axios.get call in the function under test, use this function to get the resolved data
        axios.get.mockResolvedValueOnce({ data: mockDataFile.mockApiResponse });
        const apiKey = import.meta.env.VITE_APP_API_KEY;
        // Act
        await getNews();
        // Assert
        expect(axios.get).toHaveBeenCalledWith(`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=${apiKey}`);
    })
    it('should have successful request returning the view data', async () => {
        // Arrange
        axios.get.mockResolvedValueOnce({ data: mockDataFile.mockApiResponse });
        // Act
        const result = await getNews();
        // Assert 
        expect(result).toEqual({
            articles: [
                {
                    "headline": "Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings",
                    "id": "australia-news/2022/jul/20/daniel-andrews-apologises-for-disgraceful-behaviour-of-labor-mps-after-scathing-ibac-findings",
                    "imageSrc": "https://media.guim.co.uk/526802e87e837142de4c0c854e8a95a7740dd197/0_65_6078_3647/500.jpg",
                    "url": "https://www.theguardian.com/australia-news/2022/jul/20/daniel-andrews-apologises-for-disgraceful-behaviour-of-labor-mps-after-scathing-ibac-findings",
                    "summary": "This is some text.",
                },
                {
                    "headline": "PMQs live: Boris Johnson faces Keir Starmer for last time as Tory MPs set to choose final two leadership candidates",
                    "id": "politics/live/2022/jul/20/tory-leadership-race-live-sunak-mordaunt-truss-latest-uk-politics",
                    "imageSrc": "https://media.guim.co.uk/27c027752091e28dcb8133b0d5e6cb9af7fd4e8e/60_0_1800_1080/500.jpg",
                    "url": "https://www.theguardian.com/politics/live/2022/jul/20/tory-leadership-race-live-sunak-mordaunt-truss-latest-uk-politics",
                    "summary": "This is some more text.",
                },
            ]
        });
    })
    it('should have unsuccessful request returning the error object', async () => {
        // Arrange
        const error = { message: `This is an error` };
        axios.get.mockRejectedValueOnce(error);
        // Act
        const result = await getNews();
        // Assert
        expect(result).toEqual({ articles: [], error: error.message });
    });
});
