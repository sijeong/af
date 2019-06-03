import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community'
@Component({
  selector: 'app-realtime-table',
  templateUrl: './realtime-table.component.html',
  styleUrls: ['./realtime-table.component.css']
})
export class RealtimeTableComponent implements OnInit {
  gridOptions: GridOptions;
  initialRowDataLoad$;
  rowDataUpdates$;
  
  constructor() { }

  ngOnInit() {
  }

}
