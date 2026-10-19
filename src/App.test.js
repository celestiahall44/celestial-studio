import { render, screen } from '@testing-library/react';
import App from './App';

test('renders primary hero call to action', async () => {
  render(<App />);
  const ctaElement = await screen.findByText(/book a discovery call/i);
  expect(ctaElement).toBeInTheDocument();
});
