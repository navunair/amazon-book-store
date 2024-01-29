import { Component, OnInit} from '@angular/core';
import { AppService } from '../../SERVICES/app.service';
import { CommonModule } from '@angular/common';

interface bookDetails{
  id:number,
  name:string,
  author:string,
  img:string,
  ogPrice:number,
  discountPrice:number,
  desc:string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  bookArray: Array<bookDetails> =[];
  bookDetails: string = "";
  ngOnInit(): void {
    this.bookArray = [
      {
        id: 1,
        name: "Harry Potter Philosopher's stone",
        author: "J K Rowling",
        img: "https://m.media-amazon.com/images/I/91MvjM66W+L._SY466_.jpg",
        ogPrice: 799,
        discountPrice: 375,
        desc:"Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him."
      },
      {
        id: 2,
        name: "Ikigai",
        author: "Francesc Miralles, Hector Garcia",
        img: "https://m.media-amazon.com/images/I/814L+vq01mL._SY466_.jpg",
        ogPrice: 550,
        discountPrice: 305,
        desc:"We all have an ikigai.It's the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’.It’s the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer.Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it."
      },
      {
        id: 3,
        name: "WINGS OF FIRE: AUTOBIOGRAPHY OF ABDUL KALAM",
        author: "A. P. J. Abdul Kalam",
        img: "https://m.media-amazon.com/images/I/71KKZlVjbwL._SY466_.jpg",
        ogPrice: 495,
        discountPrice: 225,
        desc:"Every common man who by his sheer grit and hard work achieves success should share his story with the rest for they may find inspiration and strength to go on, in his story. The 'Wings of Fire' is one such autobiography by visionary scientist Dr. APJ Abdul Kalam, who from very humble beginnings rose to be the President of India. The book is full of insights, personal moments and life experiences of Dr. Kalam. It gives us an understanding on his journey of success. Dr. Kalam by narrating his life journey evokes the reader to identify with one’s inner fire and potential, for he was of the firm belief that each one of us was born with the strength and potential to make a tangible change in the world."
      }
    ]
  }
  constructor(private appService: AppService){}

  public getBookDetails(index:number):void{
    if(this.bookDetails){
      this.bookDetails="";
    }
    else{
      this.bookDetails = this.bookArray[index].desc;
    }
  }
}
