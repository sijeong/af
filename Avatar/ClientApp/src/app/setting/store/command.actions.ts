import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Command } from './command.model';

export enum CommandActionTypes {
  LoadCommands = '[Command] Load Commands',
  AddCommand = '[Command] Add Command',
  UpsertCommand = '[Command] Upsert Command',
  AddCommands = '[Command] Add Commands',
  UpsertCommands = '[Command] Upsert Commands',
  UpdateCommand = '[Command] Update Command',
  UpdateCommands = '[Command] Update Commands',
  DeleteCommand = '[Command] Delete Command',
  DeleteCommands = '[Command] Delete Commands',
  ClearCommands = '[Command] Clear Commands'
}

export class LoadCommands implements Action {
  readonly type = CommandActionTypes.LoadCommands;

  constructor(public payload: { commands: Command[] }) {}
}

export class AddCommand implements Action {
  readonly type = CommandActionTypes.AddCommand;

  constructor(public payload: { command: Command }) {}
}

export class UpsertCommand implements Action {
  readonly type = CommandActionTypes.UpsertCommand;

  constructor(public payload: { command: Command }) {}
}

export class AddCommands implements Action {
  readonly type = CommandActionTypes.AddCommands;

  constructor(public payload: { commands: Command[] }) {}
}

export class UpsertCommands implements Action {
  readonly type = CommandActionTypes.UpsertCommands;

  constructor(public payload: { commands: Command[] }) {}
}

export class UpdateCommand implements Action {
  readonly type = CommandActionTypes.UpdateCommand;

  constructor(public payload: { command: Update<Command> }) {}
}

export class UpdateCommands implements Action {
  readonly type = CommandActionTypes.UpdateCommands;

  constructor(public payload: { commands: Update<Command>[] }) {}
}

export class DeleteCommand implements Action {
  readonly type = CommandActionTypes.DeleteCommand;

  constructor(public payload: { id: string }) {}
}

export class DeleteCommands implements Action {
  readonly type = CommandActionTypes.DeleteCommands;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearCommands implements Action {
  readonly type = CommandActionTypes.ClearCommands;
}

export type CommandActions =
 LoadCommands
 | AddCommand
 | UpsertCommand
 | AddCommands
 | UpsertCommands
 | UpdateCommand
 | UpdateCommands
 | DeleteCommand
 | DeleteCommands
 | ClearCommands;
