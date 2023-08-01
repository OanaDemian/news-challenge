import { render, screen, fireEvent } from '@testing-library/react';
import ArticleRow from '../src/Components/ArticleRow';

describe('ArticleRow tests', () => {
   
  it('should render the article summary when text when expanded is true',  () => {
    // Arrange
    const mockArticle = {
      headline: "Article 1",
      imageSrc: 'article image',
      url: 'article url',
      summary: 'article summary',
      id: '1'
    };
    // Act
    render(<ArticleRow article={mockArticle} />)
    //Assert
    expect(screen.queryByText(/article summary/i)).not.toBeInTheDocument();
    //Act
    fireEvent.click(screen.getByRole('click'));
    // Assert
    expect(screen.getByText(/article summary/i)).toBeInTheDocument();

    });
});

