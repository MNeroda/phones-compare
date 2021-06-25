import {PhonesAction, PhonesActionTypesEnum, IPhonesCompareState} from "../../types/phones";
import {phones} from "../../model/phones";

const initialState: IPhonesCompareState = {
    phones: phones,
    visiblePhones: [],
    numberOfPhones: 3
}

export const phonesReducer = (state = initialState, action: PhonesAction): IPhonesCompareState => {
    switch (action.type) {
        case PhonesActionTypesEnum.INIT_VISIBLE: {
            return {...state, phones: action.phones, visiblePhones: action.visiblePhones}
        }
        case PhonesActionTypesEnum.SWAP_VISIBLE: {
            return {...state, phones: action.phones, visiblePhones: action.visiblePhones}
        }
        case PhonesActionTypesEnum.CHANGE_NUMBER_VISIBLE: {
            return {phones: action.phones, visiblePhones: action.visiblePhones, numberOfPhones: action.numberVisiblePhones}
        }
        default:
            return state
    }

}