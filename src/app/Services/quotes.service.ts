import { Injectable } from '@angular/core';
import { Quotes, Weight } from '../Interfaces/Quotes';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private quotesdata:Quotes[]=[
    {
    quote:"Life isn't about finding yourself. Life is about creating yourself",
    weight:Weight.One
    },
    {
      quote:"Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.",
      weight:Weight.Two
    },
    {
      quote:"Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
      weight:Weight.Three
    },
    {
      quote:"Make space in your life for the things that matter, for family and friends, love and generosity, fun and joy. Without this, you will burn out in mid-career and wonder where your life went.",
      weight:Weight.Four
    },

  ]

   getQuotes(){
   return this.quotesdata
  }
  constructor() { }
}
