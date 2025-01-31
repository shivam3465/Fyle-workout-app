import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-pagination-bar',
  templateUrl: '../templates/common.pagination.component.html',
  standalone: false,
})
export class CommonPaginationComponent {
  @Input() goToButtonDisabled: boolean = false;

  @Input() hidePagination: boolean = false;
  @Input() totalPages: number = 1;
  @Input() curPageNo: number = 1;
  @Input() isInited: boolean = false;

  @Input() pageSizeOptions: number[] = [5, 10, 15, 20]; // Default options
  @Input() selectedPageSize: number = 5; // Default selected page size

  @Output() pageNumberChanged: EventEmitter<number> = new EventEmitter();
  @Output() pageSizeChanged: EventEmitter<number> = new EventEmitter();

  pageNumberInput!: number;

  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  jumpToPage(pageNo: number) {
    if (pageNo <= this.totalPages) this.pageNumberChanged.emit(pageNo);
  }

  updatePageSize(event: Event) {
    const newSize = (event.target as HTMLSelectElement).value;
    this.pageSizeChanged.emit(Number(newSize));
  }
}
