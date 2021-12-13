import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text from home page', () => {
  render(<App />);
  const home = screen.getByText(/EA 2022 Kickball Manager/i);
  expect(home).toBeInTheDocument();
});
