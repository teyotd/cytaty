import { Component } from '@angular/core';
import { QUOTES } from './models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // nowe pole reprezentującę listę cytatów
  quotes: Quotation[] = QUOTES;
  showForm = false;

  // metoda obsługuje głosowanie na konkretny cytat
  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }
  // przełącza pole klasy true / false
  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
  bestQuotes() {
    return this.quotes.filter((quotation) => quotation.votes > 0);
  }

  worstQuotes() {
    return this.quotes.filter((quotation) => quotation.votes < 0);
  }
  addNewQuotation(quotation: Quotation) {
    this.quotes.unshift(quotation);
  }

  deletQuotation(quotation: Quotation) {
    const index = this.quotes.findIndex(
      (quote) => quotation.sentence === quote.sentence
    );
    this.quotes.splice(index, 1);
  }
}
