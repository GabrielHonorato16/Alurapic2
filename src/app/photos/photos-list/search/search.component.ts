import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit, OnDestroy{

  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';

  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
      this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.onTyping.emit(filter));
  }


  onKeyUp(x:any){
    this.debounce.next(x.target.value)
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
