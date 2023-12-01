/**
 *  @jest-environment
 */

import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import Home from '@/app/page'

test('renders Home component with AuthModal', () => {
    const { getByTestId } = render(<Home />);
    const authModalElement = screen.getByTestId('auth-modal');
    expect(authModalElement).toBeInTheDocument();
  });


// test("Home component Navbar theme toggle switch changes the html class to 'dark;", () => {
//     const { getByLabelText } = render(<Home />);
//     const themeTogglerElement = screen.getByLabelText('Toggle Dark/Light Theme')
//     expect(themeTogglerElement).toHaveTextContent("light");
//     fireEvent.click(themeTogglerElement);
//     expect(themeTogglerElement).toHaveTextContent("dark");

// })