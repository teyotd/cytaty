import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() newQuotation = new EventEmitter<Quotation>();
  // EventEmitter pozwal na tworzenie eventu klasie, dzieki temu moge emitować eventy,
  // ktore są udbierane w app.component W tym przypadku będe emitowal typ danych Quotation czyli mojego interfejsu, czyli wypchne author, sentence, votes

  // Pole do ukrywania i pokazywania formularza
  constructor() {}
  // pole quotation reprezentuje pojedynczy cytat
  quotation: Quotation = { author: '', sentence: '', votes: 0 };
  ngOnInit(): void {}

  // dodaje cytat na początek listy i resetuje pole quotation
  //unshift()dodaje określone elementy na początek tablicy i zwraca nową długość tablicy.
  addQuotation() {
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0 };
  }
}
