import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { ModelBase, Language } from './../keyboard_Object/keyboard-model';
// import * as ProdList from './../production_list';
// import { KeyboardInfo } from './../production_list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public KeyboardList = new ProductionList();
  public KeyboardList: any;
  public ChangeMode = false;
  public pageData = {};
  public PageForm: FormGroup;     // web page options form table.
  public brand = 'Vortexgear';
  public isChangeModel = false;

  public keys: Array<string>;   // KeyboardList object's key array.

  // Save keyboard macro/keychange/function setting.
  public keyboardConfig = {
    macro: [],
    keyChange: [],
    functionSet: []
  };


  public keyboardInfo = {
    keyboard: '',           // model name on page.
    language: '',           // layout on page.
    profileCount: 5,        // layer list on page.
    profile: 1,             // which layer user choice on page.
    funckeyList: ['fn', 'pn', 'fn1'],  // func_key user select on page.
    storey: 'INIT'                     // func_key which one selected.
  };

  private el: ElementRef;

  constructor(
    private fb: FormBuilder,
    private cookieService: CookieService,
    private element: ElementRef) {
    this.initialKeyboardList();
    this.el = this.element;
  }

  ngOnInit() {

    // Get KeyboardList Object key name.
    this.keys = Object.keys(this.KeyboardList);

    // Check cookies. if have it loading cookies content.
    this.ChkAndLoadCookies();

    this.Opentab('macro-tab');
  }

  /**
   * Give a number then return a 1 - n Array.
   * e.g.: 5 => return [1, 2, 3, 4, 5]
   */
  ExpendNumToArray(n: number): Array<any> {
    return Array.from(Array(n).keys()).map(x => ++x);
  }

  /**
   * Initial PageForm content.
   * if have cookies -> use cookies content.
   * else -> use keyboardlist first one information.
   * TODO: when cookies exist. change PageForm content, keyboardInfo and keyboardConfig.
   */
  InitialPageForm(cookie?: Object) {
    if (cookie) {
      // change PageForm content, keyboardInfo and keyboardConfig.
      console.log('Have cookies');
    } else {
      console.log('No cookies');
      this.PageForm = this.fb.group({
        keyboardModel: [this.KeyboardList[this.keys[0]].code],
        layoutLang: [this.KeyboardList[this.keys[0]].language[0].name],
        profile: [1],
        func_key: ['INIT']
      });

      this.keyboardInfo.keyboard = this.KeyboardList[this.keys[0]].name;
      this.keyboardInfo.language = this.KeyboardList[this.keys[0]].language[0].name;
      this.keyboardInfo.profile = 1;
      this.keyboardInfo.profileCount = this.KeyboardList[this.keys[0]].profileCount;
      this.keyboardInfo.funckeyList = this.KeyboardList[this.keys[0]].funcKeyList;
      this.keyboardInfo.storey = 'INIT';
    }
  }

  /** When user change keyboard model event.
   * 1. Layout always choice "ANSI" option.
   * 2. if had set marcro, key change or func_key then show alert to warning user
   *    "all setting will be clear".
   * 3. Write new keyboard model to cookies
   * 4. when change keyboard model need to show correct keyboard layout in tab content.
   *
   * TODO: implement.
   */
  onModelChange(event: Event) {

    // see if have any config(macro/keychange/func key) already setting.
    if ( this.keyboardConfig.functionSet.length +
    this.keyboardConfig.keyChange.length +
    this.keyboardConfig.macro.length > 0 ) {
      // show alert to warning user.
      if (confirm('Warning: Change Keyboard will reset all settings')) {
        // change keyboardinfo and clean keyboardConfig.
      } else {
        // unchange ! let PageForm content to old setting.
        console.log('No change');
        this.PageForm.patchValue({keyboardModel: [this.keyboardInfo.keyboard]});
        this.PageForm.patchValue({layoutLang: [this.keyboardInfo.language]});
        this.PageForm.patchValue({profile: [this.keyboardInfo.profile]});
        this.PageForm.patchValue({func_key: [this.keyboardInfo.storey]});
      }
    } else {
      // No key config(macro/keychange/func key) setting.
      this.PageForm.patchValue({ layoutLang: ['ANSI'] });
    }

  }

  /**
   * 1. if had set marcro, key change or func_key then show alert to warning user
   *    "all setting will be clear".
   * 2. Write new Layout config toi cookies
   * 3. Show correct keyboard layout in tab content.
   *
   * TODO: implement.
   */
  onLayoutChange(event: Event) {

  }

  /**
   * 1. if have set marcro or key change then show alert to warning user
   *    "all setting will be clear".
   * 2. Switch to another layer setting.
   *
   * TODO: implement
   */
  onLayerChange(event: Event) {

  }

  /**
   * 1. if have set marcro or key change then show alert to warning user
   *    "all setting will be clear".
   * 2. Switch to  Func.key config
   *
   * TODO: impolement
   */
  onFunckeyChange(event: Event) {

  }

  /**
   * See if have cookies -> loading cookies setting and keyboard macro, keychange and
   * func key config.
   *
   * Cookies
   *  - setting content : page options config.
   *  - keyData content : macro, keychange and function key config.
   *
   * TODO: loading cookies content.
   */
  ChkAndLoadCookies() {
    // -------------------- test ----------------
    // this.PageForm.patchValue({keyboardModel: ['vtg7900']});
    // this.PageForm.patchValue({layoutLang: ['ISO-UK']});
    // this.PageForm.patchValue({profile: 2});
    // this.PageForm.patchValue({func_key: ['default']});
    // ------------------------------------------
    const haveSet = this.cookieService.check('setting');
    const haveKeySet = this.cookieService.check('keyData');
    if (haveSet && haveKeySet) {
      // load cookies content
    } else {
      this.InitialPageForm();
    }

  }

  /**
   * Save page options form content to cookies.
   * Model, Layout, Layer, Func.key options.
   *
   * TODO: implement.
  */
  WriteOptSet2Cookies() {

  }

  /**
   * Write keyboard config to cookies.
   * Macro, key change and func.Key setting.
   *
   * TODO: Implement.
   */
  WriteKeySet2Cookies() {

  }


  /**
   * when user click tab. open the correct tab content.
   * @param tabName: to identify which tab page user click.
   * TODO: implement.
   */
  Opentab(tabName: string) {

    // show css style on button which user click it.
    const $beforeClkBtn = this.el.nativeElement.querySelector('.clicked');
    const $nowClkBtn = this.el.nativeElement.querySelector(`#${tabName}`);
    if ($beforeClkBtn) {
      $beforeClkBtn.classList.remove('clicked');
    }

    if ($nowClkBtn) {
      $nowClkBtn.classList.add('clicked');
    }

    // TODO: show tab content correctly.
    // disppear all tab content then show the user click one.
    const showContName = tabName.replace('-tab', '-content');
    this.el.nativeElement.querySelectorAll('.tab-content').forEach( ele => {
      ele.classList.add('none');
    });
    this.el.nativeElement.querySelector(`#${showContName}`).classList.remove('none');
  }

  initialKeyboardList() {
    this.KeyboardList = {
      'core4700': {
        name: 'CORE',
        code: 'core4700',
        profileCount: 5,
        funcKeyList: ['fn', 'pn', 'fn1'],
        language: [
          {
            name: 'ANSI',
            code: 'us'
          }
        ]
      },
      'vtg7900': {
        name: 'ViBE',
        code: 'vtg7900',
        profileCount: 4,
        funcKeyList: ['fn', 'pn'],
        language: [
          {
            name: 'ANSI',
            code: 'us'
          }, {
            name: 'ISO-UK',
            code: 'uk'
          }, {
            name: 'ISO-NOR',
            code: 'nor'
          }, {
            name: 'ISO-FR',
            code: 'fr'
          }, {
            name: 'ISO-DE',
            code: 'de'
          },
        ]
      },
      'vtg7500_1': {
        name: 'New 75(Race 3)',
        code: 'vtg7500_1',
        profileCount: 4,
        funcKeyList: ['fn', 'pn'],
        language: [
          {
            name: 'ANSI',
            code: 'us'
          }, {
            name: 'ISO-UK',
            code: 'uk'
          }, {
            name: 'ISO-NOR',
            code: 'fi'
          }, {
            name: 'ISO-FR',
            code: 'fr'
          }, {
            name: 'ISO-DE',
            code: 'de'
          }
        ]
      },
      'vtg6500': {
        name: 'CYPHER',
        code: 'vtg6500',
        profileCount: 4,
        funcKeyList: ['fn', 'pn'],
        language: [
          {
            name: 'ANSI',
            code: 'us'
          }, {
            name: 'ISO-UK',
            code: 'uk'
          }, {
            name: 'ISO-NOR',
            code: 'nor'
          }, {
            name: 'ISO-DE',
            code: 'de'
          }
        ]
      }
    };
  }
}
