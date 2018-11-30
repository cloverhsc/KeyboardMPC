import { Language } from './keyboard_Object/keyboard-model';
/**
 * All production keyboard list and information.
 */

interface Keyboard {
  name: string;
  code: string;
  profileCount: number;
  funcKeyList: Array<string>;
  language: Array<Language>;
}

export interface KeyboardInfo {
  ['string']: Keyboard;
}

export const ProdList = {
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
    ]},
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
    ]},
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
    ]},
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
    ]}
};

export class ProductionList {
  public KeyboardList: {KeyboardInfo};
}


const temp = {
  'macro': [{
    'profileIndex': '1',
    'sourceKey': 24,
    'sourceLayer': 'INIT',
    'macroType': '1',
    'macroRepeat': '2',
    'setting': { 'timer': '10', 'layer': 'INIT' },
    'macro': [
      { 'key': 'E0', 'layer': 'INIT', 'event': '1', 'timer': '10' },
      { 'key': 14, 'layer': 'INIT', 'event': '1', 'timer': '10' },
      { 'key': 'E0', 'layer': 'INIT', 'event': '0', 'timer': '10' },
      { 'key': 14, 'layer': 'INIT', 'event': '0', 'timer': '10' }
    ]
  }],
    'keyChange': [{
      'profileIndex': 2,
      'sourceKey': '1C',
      'sourceLayer': 'INIT',
      'targetKey': 13,
      'targetLayer': 'INIT'
    }],
    'functionSet': []
  };

const tempb = {
  'keyboard': 'vtg7500_1',
  'language': 'uk',
  'profileCount': 4,
  'layerList': ['fn', 'pn'],
  'profile': '1',
  'layer': 'INIT'
};
