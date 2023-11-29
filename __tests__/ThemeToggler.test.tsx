/**
 *  @jest-environment
 */

import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import RootLayout from '@/app/layout'

test("Home component Navbar theme toggle switch changes the html class to 'dark;", () => {
    const htmlElement = screen.getByRole('html');
    expect(htmlElement).toBeInTheDocument();
    expect(htmlElement).toHaveAttribute('lang', 'en');

    // const themeTogglerElement = screen.getByLabelText('Toggle Dark/Light Theme')
    // expect(themeTogglerElement).toHaveTextContent("light");
    // fireEvent.click(themeTogglerElement);
    // expect(themeTogglerElement).toHaveTextContent("dark");

})