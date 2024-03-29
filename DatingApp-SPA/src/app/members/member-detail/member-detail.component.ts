import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
// import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    // this.galleryOptions = [
    //   {
    //     width: '500px',
    //     height: '500px',
    //     imagePercent: 100,
    //     thumbnailsColumns: 4,
    //     preview: false
    //   }
    // ];
    // this.galleryImages = this.getImages();
  }

  // getImages() {
  //   const imageURLs = []
  //   for (const photo of this.user.photos) {
  //     imageURLs.push({
  //       small: photo.url,
  //       medium: photo.url,
  //       big: photo.url,
  //       imageAnimation: NgxGalleryAnimation.Slide,
  //       description: photo.description
  //     });
  //   }

    // return imageURLs;
  // }
}
