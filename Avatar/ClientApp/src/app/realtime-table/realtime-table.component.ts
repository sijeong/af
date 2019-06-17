import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community'
import { AppState } from '../root-store';
import { Store, select } from '@ngrx/store';
import { SignalrService } from '../services/signalr.service';
import { selectSalesData } from './store/selectors';
import { throttle } from 'rxjs/operators';
import { interval } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-realtime-table',
  templateUrl: './realtime-table.component.html',
  styleUrls: ['./realtime-table.component.css']
})
export class RealtimeTableComponent implements OnInit {
  gridOptions: GridOptions;
  initialRowDataLoads$;
  rowDataUpdates$;
  auth$
  constructor(private service: SignalrService, private store: Store<AppState>, private authService: AuthService) { 
    this.auth$ = this.authService.authStatus$
  }

  ngOnInit() {
    this.initialRowDataLoads$ = this.service.getInitialData();
    this.rowDataUpdates$ = this.store.pipe(select(selectSalesData)).pipe(
      // throttle(val => interval(5000))
    );
    this.gridOptions = <GridOptions>{
      enableRangeSelection: true,
      columnDefs: this.createColumnDefs(),
      getRowNodeId: (data) => {
        return data.id;
      },
      onGridReady: () => {
        this.initialRowDataLoads$.subscribe(
          d => {
            if (this.gridOptions.api) {
              this.gridOptions.api.setRowData(d);
            }
            this.rowDataUpdates$.subscribe((updates) => {
              if (this.gridOptions.api) {
                // console.log('yes api')
                this.gridOptions.api.updateRowData({ update: updates })
              } else {
                // console.log('no api')
              }
            })
          }
        )
      },
      onFirstDataRendered(params) {
        // params.api.sizeColumnsToFit();
      }
    }
  }
  createColumnDefs(): (import("ag-grid-community").ColDef | import("ag-grid-community").ColGroupDef)[] {
    return [
      { headerName: "ID", field: "id", width: 70, resizable: true },
      {
        headerName: "Data", field: "data", width: 100, resizable: true,
        cellClass: 'cell-number',
        valueParser: this.numberValueParser,
        cellRenderer: 'agAnimateShowChangeCellRenderer'
      },
      {
        headerName: "SalesA", field: "salesA", width: 100, resizable: true,
        cellClass: 'cell-number',
        valueParser: this.numberValueParser,
        cellRenderer: 'agAnimateShowChangeCellRenderer'
      },
      {
        headerName: "SalesB", field: "salesB", width: 100, resizable: true,
        cellClass: 'cell-number',
        valueParser: this.numberValueParser,
        cellRenderer: 'agAnimateShowChangeCellRenderer'
      },
      {
        headerName: "ProspectA", field: "prospectA", width: 100, resizable: true,
        cellClass: 'cell-number',
        valueParser: this.numberValueParser,
        cellRenderer: 'agAnimateShowChangeCellRenderer'
      },
      {
        headerName: "ProspectB", field: "prospectB", width: 100, resizable: true,
        cellClass: 'cell-number',
        valueParser: this.numberValueParser,
        cellRenderer: 'agAnimateShowChangeCellRenderer'
      },
      { headerName: "Label", field: "label", width: 100, resizable: true },
    ]
  }
  numberFormatter(params) {
    if (typeof params.value === 'number') {
      return params.value.toFixed(2);
    } else {
      return params.value;
    }
  }
  numberValueParser(params) {
    return Number(params.newValue);
  }
}


