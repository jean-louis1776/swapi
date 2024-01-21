import { Character } from "./Character.type"

export interface PaginationDataType {
  count: number
  next: string | null
  previous: string | null
  result: Character[]
}
