import { Component, OnInit } from '@angular/core';

import { ModelBase, Language } from './../keyboard_Object/keyboard-model';
import * as ProdList from './../production_list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public KeyboardList = ProdList;
  public ChangeMode = false;
  public pageData = {};

  public keys = Object.keys(this.KeyboardList.ProductionList);
  constructor() {

  }

  ngOnInit() {
    console.log(this.KeyboardList);
  }

}

// interface PageData {
//   keyboard: Array<ModelBase>;
//   tab: 'macro' | 'function_set' | 'key_change';
// }
