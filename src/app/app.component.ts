import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { Component, OnInit, VERSION } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data from '../../expense_sample.json';

interface Person {
  WHO: String;
  WEEK: Array<Week>;
}

interface Week {
  NUMBER: Number;
  EXPENSE: Array<Expense>;
}

interface Expense {
  AMOUNT: Number;
  WHAT: String;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayData = [];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.displayData = Object.keys(data).reduce((current, key) => {
      if (key === 'default') {
        return current;
      }
      current.push(data[key]);
      return current;
    }, []);
  }

  handleClick(content: any, item: Person, week: Week, expense: Expense) {
    this.modalService.open(content, { centered: true });
  }
}
