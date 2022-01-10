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
      src:"https://www.ptaufiqphotography.com/wp-content/uploads/2019/01/Indian-Wedding-Ceremony-Fateh-Garh-Heritage-Resort-2-1920x1280.jpg",
      
      thumb:"https://www.ptaufiqphotography.com/wp-content/uploads/2019/01/Indian-Wedding-Ceremony-Fateh-Garh-Heritage-Resort-2-1920x1280.jpg",

    },
    {
      src:"https://6737455825196301ef70-26c82c9028aee0c5860aa60a0bbaa4da.ssl.cf1.rackcdn.com/BestLongIslandWeddingPhotographersWeb58.JPG",
      
      thumb:"https://6737455825196301ef70-26c82c9028aee0c5860aa60a0bbaa4da.ssl.cf1.rackcdn.com/BestLongIslandWeddingPhotographersWeb58.JPG",
    },
    {
      src:"https://images.squarespace-cdn.com/content/v1/537cf5c0e4b0dd59d7f582a6/1528409487325-YIO2CKFOXNX87N72JBUZ/ElviraKalvistePhotography-MagdaNico-63.jpg?format=1000w",
      thumb:"https://images.squarespace-cdn.com/content/v1/537cf5c0e4b0dd59d7f582a6/1528409487325-YIO2CKFOXNX87N72JBUZ/ElviraKalvistePhotography-MagdaNico-63.jpg?format=1000w",

    },
    {
      src:"https://www.yourperfectweddingphotographer.co.uk/wp-content/uploads/2018/12/Wedding-Photography-Prices-Packages.jpg",
      thumb:"https://www.yourperfectweddingphotographer.co.uk/wp-content/uploads/2018/12/Wedding-Photography-Prices-Packages.jpg",
    },
    {
      src:"https://www.alfaazphotography.com/wp-content/uploads/2018/12/Wedding-0094.jpg",
      thumb:"https://www.alfaazphotography.com/wp-content/uploads/2018/12/Wedding-0094.jpg",

    },
    {
      src:"https://jermainechandra.com/wp-content/uploads/2018/05/033-indian-wedding-photographer-kerala-zuri-hotels-2.jpg",
      thumb:"https://jermainechandra.com/wp-content/uploads/2018/05/033-indian-wedding-photographer-kerala-zuri-hotels-2.jpg",

    },
    {
      src:"https://www.alfaazphotography.com/wp-content/uploads/2019/10/How-to-find-right-Indian-Wedding-Photographer-0028-1024x683.jpg",
      thumb:"https://www.alfaazphotography.com/wp-content/uploads/2019/10/How-to-find-right-Indian-Wedding-Photographer-0028-1024x683.jpg",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4hHR7CVeULBXwOQNyu1JLCotIN9uGB_kLH96xLgdXnNSQLi5MTp8DfkZF6ZSp06dsYY&usqp=CAU",
      thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4hHR7CVeULBXwOQNyu1JLCotIN9uGB_kLH96xLgdXnNSQLi5MTp8DfkZF6ZSp06dsYY&usqp=CAU",
    },
    {
      src:"https://mysticstudios.in/wp-content/uploads/2021/03/candid-wedding-photography-ramoji-film-city-hyderabad-3.jpg",
      thumb:"https://mysticstudios.in/wp-content/uploads/2021/03/candid-wedding-photography-ramoji-film-city-hyderabad-3.jpg",
    },
    {
      src:"https://www.indiastudychannel.com/attachments/resources/178244-10-christian-wedding-amorpix.jpg",
      thumb:"https://www.indiastudychannel.com/attachments/resources/178244-10-christian-wedding-amorpix.jpg",
    },
    {
      src:"https://cdn0.weddingwire.in/vendor/3099/3_2/960/jpg/wedding-photography-weddingflash-couple-shot-1_15_143099-163706361562062.jpeg",
      thumb:"https://cdn0.weddingwire.in/vendor/3099/3_2/960/jpg/wedding-photography-weddingflash-couple-shot-1_15_143099-163706361562062.jpeg",

    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__Kl-4En53K55efwu1CwjZgw1GFW4jXW51A&usqp=CAU",
      thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__Kl-4En53K55efwu1CwjZgw1GFW4jXW51A&usqp=CAU",
    },
    {
      src:"https://cdn0.weddingwire.com/vendor/540900/3_2/960/jpg/d-n-wedding-360_51_1009045-162689917263867.jpeg",
      thumb:"https://cdn0.weddingwire.com/vendor/540900/3_2/960/jpg/d-n-wedding-360_51_1009045-162689917263867.jpeg",
    },
    {
      src:"https://cdn0.weddingwire.com/vendor/157709/3_2/960/jpg/wohlsneakpeek-26_51_1907751-161100104532367.jpeg",
      thumb:"https://cdn0.weddingwire.com/vendor/157709/3_2/960/jpg/wohlsneakpeek-26_51_1907751-161100104532367.jpeg",
    },
    {
      src:"https://images.squarespace-cdn.com/content/v1/5a6e635f268b96417e6213d0/1517770864977-T4886BU7E9XQMK93UO86/image-asset.jpeg?format=1000w",
      thumb:"https://images.squarespace-cdn.com/content/v1/5a6e635f268b96417e6213d0/1517770864977-T4886BU7E9XQMK93UO86/image-asset.jpeg?format=1000w",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRa2z9yenXMYSRX6eaWFUae0UNKNmvVaHuaszAhzO2BLX9GD8khi78VGn5zVI6Vvaud8g&usqp=CAU",
      thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRa2z9yenXMYSRX6eaWFUae0UNKNmvVaHuaszAhzO2BLX9GD8khi78VGn5zVI6Vvaud8g&usqp=CAU",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8s_4yNZTMWlHlnia6A1I1L2nmy15q2WYPDFZWtXp58df28it0VCR28X-89_0J0Ag-m4&usqp=CAU",
      thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8s_4yNZTMWlHlnia6A1I1L2nmy15q2WYPDFZWtXp58df28it0VCR28X-89_0J0Ag-m4&usqp=CAU",
    },
    {
      src:"https://lh5.googleusercontent.com/gmU9oFGJcrvQMf03wcQJBueuC4ClcqHMsw645uXslCAnfxfeWTnMe2eaedtXgyG4KW3J3kgCiXO4_MP5avDesY-ZQh5XrNWLqxuwedrI-NhxH6dskLg-E3O-bVarIX2nVhfrzifE",
      thumb:"https://lh5.googleusercontent.com/gmU9oFGJcrvQMf03wcQJBueuC4ClcqHMsw645uXslCAnfxfeWTnMe2eaedtXgyG4KW3J3kgCiXO4_MP5avDesY-ZQh5XrNWLqxuwedrI-NhxH6dskLg-E3O-bVarIX2nVhfrzifE",
    },
    {
      src:"https://www.gaffmultimedia.com/wp-content/uploads/2020/02/img_20200223_2232312618969027781899444.jpg",
      thumb:"https://www.gaffmultimedia.com/wp-content/uploads/2020/02/img_20200223_2232312618969027781899444.jpg",
    }


                 

    
    
  ];

  constructor(private _lightbox:Lightbox) { }

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
