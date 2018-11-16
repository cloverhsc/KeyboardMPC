/**
 * Keyboard model base type
 */
export class ModelBase {
  name: string;
  code: string;
  profileCount: number;
  layerList: Array<string>;
  language: Array<Language>;

  constructor(
    _name?: string,
    _code?: string,
    _profileCount?: number,
    _layerList?: Array<string>,
    _language?: Array<Language>) {
      this.name = _name ? _name : '';
      this.code = _code ? _code : '';
      this.profileCount = _profileCount ? _profileCount : 4 ;
      this.layerList = _layerList ? _layerList : ['fn', 'pn'];
      this.language = _language ? _language : [new Language()];
  }
}

/**
 * For ModelBase language array.
 * e.g: {name: 'ANSI', code: 'us'}, {name: 'ISO-UK', code: 'uk'} ...etc
 */
export class Language {
  name: string;
  code: string;
  constructor(_name?: string, _code?: string) {
    this.name = _name ? _name : 'ANSI';
    this.code = _code ? _code : 'us';
  }
}
