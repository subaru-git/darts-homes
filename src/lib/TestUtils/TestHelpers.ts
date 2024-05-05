import { waitFor as originalWaitFor, waitForOptions } from '@testing-library/react';

const defaultTimeout = process.env.WAIT_FOR_DEFAULT_TIMEOUT ? parseInt(process.env.WAIT_FOR_DEFAULT_TIMEOUT, 10) : 5000;

export async function waitFor(callback: () => void,  options?: waitForOptions): Promise<void> {
  return originalWaitFor(callback, { timeout: defaultTimeout, ...options });
}