import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  

  pic:any =[
    {
      src:"assets/gallery/01.jpg",
      
      thumb:"assets/gallery/01.jpg",

    },

    {
      src:"assets/gallery/02.jpg",
      
      thumb:"assets/gallery/02.jpg",

    },

    {
      src:"assets/gallery/03.jpg",
      
      thumb:"assets/gallery/03.jpg",

    },

    {
      src:"assets/gallery/04.jpeg",
      
      thumb:"assets/gallery/04.jpeg",

    },

    {
      src:"assets/gallery/05.jpeg",
      
      thumb:"assets/gallery/05.jpeg",

    },

    {
      src:"assets/gallery/06.jpg",
      
      thumb:"assets/gallery/06.jpg",

    },

    {
      src:"assets/gallery/07.jpg",
      
      thumb:"assets/gallery/07.jpg",

    },

    {
      src:"assets/gallery/08.jpg",
      
      thumb:"assets/gallery/08.jpg",

    },

    {
      src:"assets/gallery/09.jpg",
      
      thumb:"assets/gallery/09.jpg",

    },

    {
      src:"assets/gallery/10.jpg",
      
      thumb:"assets/gallery/10.jpg",

    },
                  

    
    
  ];

  constructor(private _lightbox:Lightbox)  { }

  ngOnInit(): void {
  }

  open(index: number): void {
    // open lightbox
    console.log("===>", index)
    this._lightbox.open(this.pic, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
