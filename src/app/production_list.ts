import { Language } from './keyboard_Object/keyboard-model';
/**
 * All production keyboard list and information.
 */

interface KeyboardInfo {
  name: string;
  code: string;
  profileCount: number;
  layerList: Array<string>;
  language: Array<Language>;
}

export const ProductionList = {
  'core4700': {
    name: 'CORE',
    code: 'core4700',
    profileCount: 5,
    layerList: ['fn', 'pn', 'fn1'],
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
    layerList: ['fn', 'pn'],
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
    layerList: ['fn', 'pn'],
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
    layerList: ['fn', 'pn'],
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
