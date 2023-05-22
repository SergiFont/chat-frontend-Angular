import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pagination!: Observable<number>;
  paginationItems: number[] = [];
  selectedIndex: number = 0;

  @Output()
  public onIndex = new EventEmitter<number>()

  ngOnInit(): void {
    this.pagination.subscribe(number => {
      this.paginationItems = Array.from({ length: number });
    });
  }

  sendIndex(index: number): void {
    this.selectedIndex = index;
    this.onIndex.emit(index*10);
  }

}
