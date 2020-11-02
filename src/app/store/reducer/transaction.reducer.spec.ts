import * as fromReducer from '../reducer/transaction.reducer';
import * as fromActions from '../action/transaction.actions';

describe('Store > Data > TransactionReducer', () => {
    afterEach(() => {
      fromReducer.initialState.data = null;
    });

    it('SHOULD load data', () => {
        const { initialState } = fromReducer;
        const payload: any = [];
        const action = new fromActions.LoadItems(payload);
        const state = fromReducer.TransactionReducer(initialState, action);
    
        expect(state.data).toEqual(payload.transactions);
    });
});