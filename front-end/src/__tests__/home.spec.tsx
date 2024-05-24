import { render } from '@testing-library/react';
import HomePage from '../pages/home/HomePage';

describe('Home component', () => {
  it('should render a home page', () => {
    render(<HomePage/>);
  });
});
