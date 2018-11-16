import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  public keybdForm: FormGroup;

  public keys = Object.keys(this.KeyboardList.ProductionList);
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.keybdForm = this.fb.group({
      keyboardModel: [ProdList.ProductionList.core4700.code],
      layoutLang: [ProdList.ProductionList.core4700.language[0].name],
      layer: ['1'],
      func_key: ['Default']
    });
    console.log(this.KeyboardList);
  }

}

// interface PageData {
//   keyboard: Array<ModelBase>;
//   tab: 'macro' | 'function_set' | 'key_change';
// }
