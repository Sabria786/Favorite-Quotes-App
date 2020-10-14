import { Component } from '@angular/core';
import { Quotes } from 'src/assets/data/quotes.interface';
import { QuotesService } from '../service/quotes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  quotes: Quotes[];
  constructor(private quoteService: QuotesService) {}
  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuote();
  }

  onRemoveFavorite(quote: Quotes) {
    this.quoteService.removeQuoteFromFavorite(quote);
    this.quotes = this.quoteService.getFavoriteQuote();
  }

}
