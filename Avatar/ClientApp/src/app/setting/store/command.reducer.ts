import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Command } from './command.model';
import { CommandActions, CommandActionTypes } from './command.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends EntityState<Command> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Command> = createEntityAdapter<Command>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: CommandActions
): State {
  switch (action.type) {
    case CommandActionTypes.AddCommand: {
      return adapter.addOne(action.payload.command, state);
    }

    case CommandActionTypes.UpsertCommand: {
      return adapter.upsertOne(action.payload.command, state);
    }

    case CommandActionTypes.AddCommands: {
      return adapter.addMany(action.payload.commands, state);
    }

    case CommandActionTypes.UpsertCommands: {
      return adapter.upsertMany(action.payload.commands, state);
    }

    case CommandActionTypes.UpdateCommand: {
      return adapter.updateOne(action.payload.command, state);
    }

    case CommandActionTypes.UpdateCommands: {
      return adapter.updateMany(action.payload.commands, state);
    }

    case CommandActionTypes.DeleteCommand: {
      return adapter.removeOne(action.payload.id, state);
    }

    case CommandActionTypes.DeleteCommands: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case CommandActionTypes.LoadCommands: {
      return adapter.addAll(action.payload.commands, state);
    }

    case CommandActionTypes.ClearCommands: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectCommandState = createFeatureSelector<State>('command');
export const selectAllCommands = createSelector(selectCommandState, selectAll)