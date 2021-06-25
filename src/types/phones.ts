export interface IPhonesCompareState {
    phones: any[]
    visiblePhones: any[]
    numberOfPhones: number
}

export enum PhonesActionTypesEnum {
    INIT_VISIBLE = "INIT_VISIBLE",
    SWAP_VISIBLE = "SWAP_VISIBLE",
    CHANGE_NUMBER_VISIBLE = "CHANGE_NUMBER_VISIBLE"
}

interface IInitVisibleAction {
    type: PhonesActionTypesEnum.INIT_VISIBLE
    phones: any[]
    visiblePhones: any[]
}
interface ISwapVisibleAction {
    type: PhonesActionTypesEnum.SWAP_VISIBLE
    phones: any[]
    visiblePhones: any[]
}
interface IChangeNumberVisibleAction {
    type: PhonesActionTypesEnum.CHANGE_NUMBER_VISIBLE
    phones: any[]
    visiblePhones: any[]
    numberVisiblePhones: number
}


export type PhonesAction = IInitVisibleAction | ISwapVisibleAction | IChangeNumberVisibleAction