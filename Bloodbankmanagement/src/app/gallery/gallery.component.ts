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
      src:"https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      
      thumb:"https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    },

    {
      src:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/06/798811-blood-donation-camp-01.jpg",
      
      thumb:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/06/798811-blood-donation-camp-01.jpg",

    },

    {
      src:"https://assets.telegraphindia.com/telegraph/2020/Sep/1600627511_21metblood_5col-3.jpg",
      
      thumb:"https://assets.telegraphindia.com/telegraph/2020/Sep/1600627511_21metblood_5col-3.jpg",

    },

    {
      src:"https://pin.it/2GA2IA9",
      
      thumb:"https://pin.it/2GA2IA9",

    },

    {
      src:"https://pin.it/5cpxRHG",
      
      thumb:"https://pin.it/5cpxRHG",

    },

    {
      src:"https://pin.it/6lqHDH1",
      
      thumb:"https://pin.it/6lqHDH1",

    },

    {
      src:"https://pin.it/1eOF1r2",
      
      thumb:"https://pin.it/1eOF1r2",

    },

    {
      src:"",
      
      thumb:"",

    },

    {
      src:"",
      
      thumb:"",

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
