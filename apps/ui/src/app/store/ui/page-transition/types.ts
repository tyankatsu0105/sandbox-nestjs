import { featureKey } from './constants';

export const ActionTypes = {
  FETCH: `${featureKey}/fetch`,
};

type Fetch = {
  type: typeof ActionTypes['FETCH'];
};

export type Action = Fetch;

export type State = {
  isLoading: boolean;
};
