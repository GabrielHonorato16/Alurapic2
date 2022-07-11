import { Photo } from './../photo/photo';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  correntPage: number = 1
  userName: string = ''

  constructor(private activatedRoute: ActivatedRoute,
     private photoService: PhotoService){}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName']
    this.photos= this.activatedRoute.snapshot.data['photos'];
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter=> this.filter = filter);
  }

  onKeyUp(x:any){
    this.debounce.next(x.target.value)
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
  load(){
    this.photoService
    .listFromUserPaginated(this.userName, ++this.correntPage)
    .subscribe(photos => {this.photos = this.photos.concat(photos);
    if(!photos.length) this.hasMore=false
    });

  }

}
