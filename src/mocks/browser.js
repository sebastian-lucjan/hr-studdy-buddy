import { setupWorker } from 'msw';
import { handlers } from './handlers/index';

console.log('BROWSER', handlers);

export const worker = setupWorker(...handlers);
