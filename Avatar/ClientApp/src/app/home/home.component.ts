import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignalrService } from '../services/signalr.service';
import { Store, select } from '@ngrx/store';
import { selectSalesData } from '../realtime-table/store/selectors';
import { Observable, of, interval, from, zip } from 'rxjs';
import { Sales } from '../models/sales';
import { map, throttle, groupBy, mergeMap, toArray, concat, concatMap, bufferCount, switchMap, flatMap, combineAll } from 'rxjs/operators';
import { AppState } from '../root-store';
import * as ck from '@ckeditor/ckeditor5-build-balloon-block'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public editor = ck;
  
  view: any[] = [800, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  chartData$: Observable<Sales[]> = this.store.pipe(select(selectSalesData)).pipe(
    throttle(val => interval(2000))
  );

  barChartData$ = this.chartData$.pipe(
    map(b => b.map(c => { return { name: c.label, value: c.data } })),
  );
  lineChartData$
  preLineChart$ = this.chartData$.pipe(
    map(a => a.map(b => {return {name: b.label, value: b.data, seq: b.date}})),
    bufferCount(5)
  ).subscribe(
    d => this.lineChartData$ = of(d).pipe(

      mergeMap(f => f),
      mergeMap(s => s),
      groupBy(item => item.name, i => { return { name: i.seq, value: i.value } }),
      mergeMap(o => {
        return o.pipe(
          toArray(),
          map(b => {
            return { name: o.key, series: b }
          })
        )
      }),
      toArray()
    )
  )
  data = [
    [
      { name: 'A', value: 5, seq: 1 }, { name: 'B', value: 7, seq: 1 }, { name: 'C', value: 2, seq: 1 }
    ],
    [
      { name: 'A', value: 7, seq: 3 }, { name: 'B', value: 9, seq: 3 }, { name: 'C', value: 1, seq: 3 }
    ],
    [
      { name: 'A', value: 7, seq: 5 }, { name: 'B', value: 9, seq: 5 }, { name: 'C', value: 5, seq: 5 }
    ]
  ]

  data$ = of(this.data).pipe(
    mergeMap(x => x),
    mergeMap(y => y),
    groupBy(item => item.name, i => { return { name: i.seq, value: i.value } }),
    mergeMap(obs => {
      return obs.pipe(
        toArray(),
        map(a => {
          return { name: obs.key, series: a }
        })
      )
    }),
    toArray(),
  )


  gridApi;
  gridColumnApi;

  columnDefs;
  autoGroupColumnDef;
  defaultColDef;
  rowSelection;
  rowGroupPanelShow;
  pivotPanelShow;
  rowData;

  constructor(private http: HttpClient, private service: SignalrService, private store: Store<AppState>) {
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
    
  }
  onSelect(data) {
    console.log('Item clicked', data);
  }
  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

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

}

