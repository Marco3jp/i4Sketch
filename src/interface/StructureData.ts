export interface StructureElement {
    id?: string // null mean wrapper element
    childElements?: StructureData
}

export type StructureData = Array<StructureElement>
