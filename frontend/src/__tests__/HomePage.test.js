import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { waitForElementToBeRemoved } from '@testing-library/react';
import HomePage from '../app/page';

jest.mock('next/link', () => ({ children }) => <>{children}</>);
const mockRouter = { push: jest.fn(), replace: jest.fn() };
jest.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
}));

// Render HomePage test
describe('HomePage', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    jest.clearAllMocks();
  });

  test('renders HomePage and shows item list', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([{ id: 1, name: 'Item 1', description: 'Desc', price: 10 }]));
    render(<HomePage />);
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading items.../i));
    expect(await screen.findByText(/Item 1/)).toBeInTheDocument();
  });
});