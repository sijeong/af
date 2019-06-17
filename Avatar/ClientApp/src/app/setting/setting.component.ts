import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { AppState } from '../root-store';
import { UpsertCommands } from './store/command.actions';
import { routes as appRoutes } from '../app-routing.module'
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.routes = appRoutes.map(ar => ar.path);
  }

  routes = [
    'home',
    'article',
    'calendar'
  ]

  commands = [

  ]

  todo = [
    'A',
    'B'
  ]
  done = []
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  save() {
    const cmds = this.commands.map((c, index) => { return { id: index, data: c } })
    this.store.dispatch(new UpsertCommands({ commands: cmds }));
  }

}
