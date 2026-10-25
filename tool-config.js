export const tool = {
  "id": "E022",
  "title": "용량성 리액턴스 계산기",
  "inputs_text": "정현파 주파수 f [Hz], 정전용량 C [F]",
  "formula": "X_C = 1 / (2π f C)",
  "output_text": "용량성 리액턴스의 크기 X_C [Ω]",
  "assumptions": "f,C>0. 이상 커패시터·정현파 정상상태에 한정하며 출력은 임피던스의 음의 허수부 자체가 아니라 양의 크기다. ESR·자기공진은 제외한다.",
  "purpose": "커패시터 리액턴스 계산 / 교류 회로 소자 검산",
  "sources": [
    {
      "label": "OpenStax · Simple AC Circuits",
      "url": "https://openstax.org/books/university-physics-volume-2/pages/15-2-simple-ac-circuits"
    }
  ],
  "slug": "eng-capacitive-reactance",
  "category": "전기",
  "result_label": "용량성 리액턴스 크기 X_C",
  "result_dimension": "resistance",
  "fields": [
    {
      "key": "f",
      "label": "정현파 주파수 f",
      "dimension": "frequency",
      "example": 1000,
      "constraint": "positive",
      "display_unit": "Hz",
      "display_value": "1000"
    },
    {
      "key": "c",
      "label": "정전용량 C",
      "dimension": "capacitance",
      "example": 1e-06,
      "constraint": "positive",
      "display_unit": "uF",
      "display_value": "1"
    }
  ],
  "site": "https://nanalab.kr/eng-capacitive-reactance/",
  "repository": "https://github.com/NaNaCompany/eng-capacitive-reactance",
  "condition": "",
  "output_unit": "ohm"
};
