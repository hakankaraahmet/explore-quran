export interface IVerse {
  [x: string]: any;
  verses: IVerseInfo[];
  pagination: IPagination;
}

export interface IVerseInfo {
  id: number;
  verse_number: number;
  verse_key: string;
  hizb_number: number;
  rub_el_hizb_number: number;
  ruku_number: number;
  manzil_number: number;
  sajdah_number: any;
  text_uthmani: string;
  page_number: number;
  juz_number: number;
  words: IWord[];
  translations : ITranslation[]
}

export interface IWord {
  id: number;
  position: number;
  audio_url: string;
  char_type_name: string;
  code_v1: string;
  page_number: number;
  line_number: number;
  text: string;
  translation: ITranslationWord;
  transliteration: ITransliteration;
}

export interface ITranslationWord {
  text: string;
  language_name: string;
}

export interface ITransliteration {
  text: string;
  language_name: string;
}

export interface IPagination {
  per_page: number;
  current_page: number;
  next_page: any;
  total_pages: number;
  total_records: number;
}

export interface ITranslation {
  id: number
  resource_id: number
  text: string
}
