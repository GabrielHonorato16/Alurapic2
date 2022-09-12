import { Photo } from './../photo/photo';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit{

  photos: Photo[] = [];
  filter: string = '';

  hasMore: boolean = true;
  correntPage: number = 1
  userName: string = ''

  constructor(private activatedRoute: ActivatedRoute,
     private photoService: PhotoService){}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName']
    this.photos= this.activatedRoute.snapshot.data['photos'];
  }



  load(){
    this.photoService
    .listFromUserPaginated(this.userName, ++this.correntPage)
    .subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos);
    if(!photos.length) this.hasMore=false
    });

  }

}
