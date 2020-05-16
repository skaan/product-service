import { INPUT_CHANGED } from "./types"

export const inputChanged = (input) => {
  return {
    type: INPUT_CHANGED,
    payload: input
  }
}