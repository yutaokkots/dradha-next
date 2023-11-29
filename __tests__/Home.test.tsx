/**
 *  @jest-environment
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import Home from '@/app/page'


test('renders Home component with NavBar and AuthModal', () => {
    // Arrange
    const { getByTestId } = render(<Home />);
  
    // Act
    const navBarElement = screen.getByTestId('navbar');
    const authModalElement = screen.getByTestId('auth-modal');
  
    // Assert
    expect(navBarElement).toBeInTheDocument();
    expect(authModalElement).toBeInTheDocument();
  });