export interface InputConfig {
  type: 
    | "checkbox"
    | "date"
    | "number"
    | "radio"
    | "select"
    | "text"
  ,
  modelProperty: {
    property: any,
    model: string
  },
  props: {
    checked:boolean,
    disabled: boolean,
    label: string,
    max: number,
    maxlength: number,
    min: number,
    name: string,
    options: []
    placeholder: string,
    required: boolean,
    values: []
  }
}
