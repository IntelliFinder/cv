import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PLDataSource } from './pl-datasource';
import { AwardDataSource } from './awards-datasource';
import { LangDataSource } from './lang-datasource';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PLDataSource;
  langDataSource: LangDataSource;
  awardDataSource: AwardDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new PLDataSource(this.paginator, this.sort);
    this.awardDataSource = new AwardDataSource(this.paginator, this.sort);
    this.langDataSource = new LangDataSource(this.paginator, this.sort);
  }
}
