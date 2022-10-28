import { render } from '@testing-library/react';
import Gallery from "../components/Gallery";
import '@testing-library/jest-dom';

describe('Gallery Component', () => {
  it('renders the gallery component with photos', () => {

    const {container} = render(<Gallery/>)

    expect(container.firstChild).toHaveClass('gallery')
  })
});