import { render, screen } from '@testing-library/react';
import Header from "../components/Header";
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('renders the header component', () => {
    render(<Header />)

    const heading = screen.getByRole('heading', {
      name: "Unsplash Photo Gallery",
    })

    expect(heading).toBeInTheDocument()
  })
});