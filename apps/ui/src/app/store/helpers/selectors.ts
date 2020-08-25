import { FeatureKey } from '../reducer';

// TODO: 型FeatureKeyを外部から注入できないか考える
export const featureStateSelectorCreator = <State>(featureKey: FeatureKey) => {
  const featureStateSelector = (state: { [featureKey]: State }) =>
    state[featureKey];

  return { featureStateSelector };
};
