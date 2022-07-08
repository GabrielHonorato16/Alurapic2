import { Photo } from './../photo/photo';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.photos= this.activatedRoute.snapshot.data['photos'];
 }

onKeyUp(x:any){
  this.filter = x.target.value
}

}
