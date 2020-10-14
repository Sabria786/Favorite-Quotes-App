import { Injectable } from '@angular/core';
import { Quotes } from 'src/assets/data/quotes.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private favoriteQuotes: Quotes[] = [];
  constructor() { }
  addQuoteToFavorite(quote:Quotes) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }
  getFavoriteQuote() {
    return this.favoriteQuotes.slice();
  }
  getQuote(id:string) {
    return{...this.favoriteQuotes.find(p =>p.id === id)};
  }
  removeQuoteFromFavorite(quote: Quotes) {
    const position = this.favoriteQuotes.findIndex((quoteE1:Quotes) => {
      return quoteE1.id === quote.id;
    });
    this.favoriteQuotes.splice(position, 1)
    //console.log(quote);
  }
}
