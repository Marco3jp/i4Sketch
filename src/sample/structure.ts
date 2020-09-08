import {StructureData} from "~/src/interface/StructureData";

export let sampleStructure: StructureData = [
    {
        id: '1'
    },
    {
        childElements: [
            {
                id: '2'
            },
            {
                id: '3'
            },
            {
                childElements: [
                    {
                        id: '4'
                    },
                    {
                        id: '5'
                    }
                ]
            }
        ]
    }
]
