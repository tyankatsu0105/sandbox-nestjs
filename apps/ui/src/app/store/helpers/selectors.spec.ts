import { featureStateSelectorCreator } from './selectors';

describe('selectors', () => {
  describe('featureStateSelectorCreator', () => {
    let featureKey: Parameters<typeof featureStateSelectorCreator>[0];

    beforeEach(() => {
      featureKey = 'pageTransition';
    });
    it('when pass featureKey, should return featureStateSelector', () => {
      type State = {
        stateProperty: string;
      };

      const result = featureStateSelectorCreator<State>(featureKey);

      expect(result).toHaveProperty('featureStateSelector');
    });

    it('when pass a pair of featureKey and state to featureStateSelector, should return state', () => {
      type State = {
        stateProperty: string;
      };

      const result = featureStateSelectorCreator<State>(featureKey);

      expect(
        result.featureStateSelector({ pageTransition: { stateProperty: '' } })
      ).toEqual({ stateProperty: '' });
    });
  });
});
