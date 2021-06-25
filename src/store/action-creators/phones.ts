import {Dispatch} from "redux";
import {PhonesAction, PhonesActionTypesEnum} from "../../types/phones";

export const initVisible = (phones: any[], numberVisible: number) => {
    return (dispatch: Dispatch<PhonesAction>) => {
        dispatch({
            type: PhonesActionTypesEnum.INIT_VISIBLE,
            phones: phones.slice(numberVisible, phones.length),
            visiblePhones: phones.slice(0, numberVisible)
        })
    }
}

export const changeNumberVisible = (phones: any[], visiblePhones: any[], newNum: number) => {
    return (dispatch: Dispatch<PhonesAction>) => {
        const allPhones = [...visiblePhones, ...phones]
        dispatch({
            type: PhonesActionTypesEnum.CHANGE_NUMBER_VISIBLE,
            visiblePhones: allPhones.slice(0, newNum),
            phones: allPhones.slice(newNum, allPhones.length),
            numberVisiblePhones: newNum
        })
    }
}

export const swapVisible = (phones: any[], visiblePhones: any[], swapInID: number, swapToID: number) => {
    const phoneIndex = phones.findIndex(item => item.id === swapToID)
    const visibleIndex = visiblePhones.findIndex(item => item.id === swapInID)
    return (dispatch: Dispatch<PhonesAction>) => {
        dispatch({
            type: PhonesActionTypesEnum.SWAP_VISIBLE,
            visiblePhones: [...visiblePhones.slice(0, visibleIndex), phones[phoneIndex], ...visiblePhones.slice(visibleIndex+1, visiblePhones.length)],
            phones: [...phones.slice(0, phoneIndex), visiblePhones[visibleIndex], ...phones.slice(phoneIndex+1, phones.length)]
        })
    }
}