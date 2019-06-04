import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignalrService } from '../services/signalr.service';
import { RealTimeState, selectRealTimeState } from '../realtime-table/store/realTimeState';
import { Store, select } from '@ngrx/store';
import { selectSalesData } from '../realtime-table/store/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public chartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  chartLabels: string[] = ['Real time data for the chart'];
  chartType: string = 'bar';
  chartLegend: boolean = true;
  colors: any[] = [{ backgroundColor: '#5491DA' }, { backgroundColor: '#E74C3C' }, { backgroundColor: '#82E0AA' }, { backgroundColor: '#E5E7E9' }]

  chartData$: any = this.store.pipe(select(selectSalesData));

  cd1 = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
  ];

  cd2 = [
    { headerName: 'Make', field: 'make', filter: true },
    { headerName: 'Model', field: 'model', filter: true },
    { headerName: 'Price', field: 'price', filter: true },
  ];
  cd3 = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true },
  ];

  rd = [
    { make: 'Toyata', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  gridApi;
  gridColumnApi;

  columnDefs;
  autoGroupColumnDef;
  defaultColDef;
  rowSelection;
  rowGroupPanelShow;
  pivotPanelShow;
  rowData;

  constructor(private http: HttpClient, private service: SignalrService, private store: Store<RealTimeState>) {
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        filterParams: { newRowsAction: "keep" },
        checkboxSelection: function (params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        headerCheckboxSelection: function (params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        }
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Country",
        field: "country",
        width: 120,
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Year",
        field: "year",
        width: 90,
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Date",
        field: "date",
        width: 110,
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110,
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 100,
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100,
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100,
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Total",
        field: "total",
        width: 100,
        filterParams: { newRowsAction: "keep" }
      }
    ];
    this.autoGroupColumnDef = {
      headerName: "Group",
      width: 200,
      field: "athlete",
      valueGetter: function (params) {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: { checkbox: true }
    };
    this.defaultColDef = {
      editable: true,
      // enableRowGroup: true,
      // enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true
    };
    this.rowSelection = "multiple";
    this.rowGroupPanelShow = "always";
    this.pivotPanelShow = "always";
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }

  ngOnInit() {
    this.service.startHttpRequest();
  }
}



