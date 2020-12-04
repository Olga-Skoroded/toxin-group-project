import { ForkEffect, takeLatest, takeLeading } from 'redux-saga/effects';

import { Dependencies } from './api.model';

type Action<Z> = {
  type: Z;
};

type ActionPayload<Z, T> = Action<Z> & {
  payload: T;
};

const takeLatestAction = <T extends string>(
  type: T,
  worker: (deps: Dependencies, action: Action<T>) => unknown,
  deps?: Dependencies,
): ForkEffect<unknown> => takeLatest(type, worker, deps);

const takeLeadingAction = <T extends string>(
  type: T,
  worker: (deps: Dependencies, action: Action<T>) => unknown,
  deps?: Dependencies,
): ForkEffect<unknown> => takeLeading(type, worker, deps);

export type { Action, ActionPayload };

export { takeLatestAction, takeLeadingAction };
