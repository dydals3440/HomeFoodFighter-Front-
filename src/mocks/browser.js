import { setupWorker } from 'msw';

import authHandler from './handlers/auth';
import recipeHandler from './handlers/recipe';
import refrigeratorHandler from './handlers/refrigerator';

export const worker = setupWorker(
  ...authHandler,
  ...recipeHandler,
  ...refrigeratorHandler,
);
