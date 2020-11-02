import {Action} from '@ngrx/store';

export enum ActionTypes {
    LOAD_DATA = '[Transaction] Load items from server',
    LoadSuccess = '[Transaction] Load success'
}

export class LoadData implements Action {
    readonly type = ActionTypes.LOAD_DATA;
    constructor(public payload: { cursor: string; limit: number }) {}
}

export class LoadItems implements Action {
    readonly type = ActionTypes.LoadSuccess;

    constructor(public payload: []) {}
}

export type ActionsUnion = LoadItems | LoadData;
