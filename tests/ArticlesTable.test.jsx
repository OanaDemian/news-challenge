import { render, screen, act } from '@testing-library/react';
import ArticlesTable from '../src/Components/ArticlesTable';
import { getNews } from '../src/utils/getNews';

vi.mock(`../src/utils/getNews`);

describe('ArticlesTable tests', () => {
    it('should render the articles', async () => {
        // Arrange      
        getNews.mockReturnValue(Promise.resolve({ articles: [{
            headline: "Article 1",
            imageSrc: '',
            id: '1'
            }, {
            headline: "Article 2",
            imageSrc: '',
            id: '2'
        }]}));
        // 1. Render the component under test with some articles
        await act(() => {
            render(<ArticlesTable />);
        });
        // Act
        // Assert
        // 2. Assert the correct number of rows are rendered in the table
        const articlesRow1 = screen.getByText(/Article 1/i);
        const articlesRow2 = screen.getByText(/Article 2/i);
        expect(articlesRow1).toBeInTheDocument();
        expect(articlesRow2).toBeInTheDocument();
        const tableRows = screen.getAllByRole(`row`);
        expect(tableRows.length).toBe(3);
    });
       
    it('shows the first article as "Loading ..." on first render', () => {
        // Arrange
        render(<ArticlesTable />);
       // Act
       // Assert 
        const noArticlesRow = screen.getByText(/Loading .../i);
        expect(noArticlesRow).toBeInTheDocument();
    });
});
