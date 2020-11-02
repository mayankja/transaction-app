import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TransactionEffects } from '../effects/transaction.effect';
import * as fromActions from '../action/transaction.actions';
import { TransactionService } from '../../shared/service/transaction.service';

describe('Store > Data > TransactionEffect', () => {
    let actions$: Observable<Action>;
    let effects: TransactionEffects;
    let TransactionService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [
            TransactionEffects,
            provideMockStore(),
            provideMockActions(() => actions$),
            {
              provide: TransactionService,
              useValue: jasmine.createSpyObj('TransactionService', ['loadTransactions'])
            }
          ],
        });
    
        effects = TestBed.get<TransactionEffects>(TransactionEffects);
        TransactionService = TestBed.get<TransactionService>(TransactionService);
      }));

      it('SHOULD dispatch LoadItems action WHEN LoadData action is dispatched', () => {
        const data: any = [];
        TransactionService.loadTransactions.and.returnValue(of(data));
    
        actions$ = of({ type: fromActions.ActionTypes.LOAD_DATA });
    
        effects.loadTransaction$.subscribe(action => {
          expect(action.type).toBe(fromActions.ActionTypes.LoadSuccess);
          expect(action.payload).toEqual(!!data);
        });
      });
});