import * as Actions from '../action/transaction.actions';

describe('Store > Data > DataActions', () => {
    it('SHOULD create a LoadData action', () => {
        const payload = { cursor: '', limit: 10 };
      const action = new Actions.LoadData(payload);
      expect(action.type).toEqual(Actions.ActionTypes.LOAD_DATA);
    });

    it('SHOULD create a LoadSuccess action containing a payload', () => {
        const payload: any = [];
        const action = new Actions.LoadItems(payload);
    
        expect({ ...action }).toEqual({
          type: Actions.ActionTypes.LoadSuccess,
          payload
        });
      });
})