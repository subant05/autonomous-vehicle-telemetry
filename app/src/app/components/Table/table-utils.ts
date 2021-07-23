import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-table-util',
    template: '',
    styleUrls: ['']
  })
  export class TableUtil implements OnInit {
    public tableList:any = new MatTableDataSource([])

    @Output() onClick:  EventEmitter<any> = new EventEmitter<any>()
    
    constructor(){
    }

    ngOnInit() :void{

    }

    updateList(data:any){
      this.tableList = new MatTableDataSource(data)
    }
    
    rowClick(row:any){
        this.onClick.emit(row.vehicle_id || row.id)
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.tableList.filter = filterValue.trim().toLowerCase();
    
        if (this.tableList.paginator) {
          this.tableList.paginator.firstPage();
        }
      }

  }