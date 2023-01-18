import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'base-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() public filteredValue = new EventEmitter<string>();
  public debounceFilter: Subject<string> = new Subject<string>();
  public inputValue: string = '';

  public ngOnInit(): void {
    this.debounceFilter.pipe(debounceTime(300)).subscribe((filteredValue) => {
      this.filteredValue.emit(filteredValue);
    });
  }

  public onKeyUp() {
    this.debounceFilter.next(this.inputValue);
  }

  public ngOnDestroy(): void {
    this.debounceFilter.unsubscribe();
  }
}
