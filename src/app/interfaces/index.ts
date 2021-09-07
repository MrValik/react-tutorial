
export type ID = string | number

export interface IAction<T> {
  type: T
  payload? : any
}