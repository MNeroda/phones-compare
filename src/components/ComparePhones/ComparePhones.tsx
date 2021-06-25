import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {changeNumberVisible, initVisible} from "../../store/action-creators/phones";
import "./styles.css"
import {TranslateField} from "../../data/phones";
import {ChangeWindow} from "../ChangeWindow/ChangeWindow";

export const ComparePhones: React.FC = () => {
    const [showDifferences, setShowDifferences] = useState(false)
    const [numbersOfShowed, setNumbersOfShowed] = useState<Array<number>>([])


    const {phones, visiblePhones, numberOfPhones} = useTypedSelector(state => state.phones)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initVisible(phones, numberOfPhones))
    }, [])

    useEffect(() => {
        const tmpArr = []
        for (let i = 2; i <= 6 && i <= phones.length + visiblePhones.length; i++) {
            tmpArr.push(i)
        }
        setNumbersOfShowed(tmpArr)
    }, [])


    return (
        <>
            <div className="info-panel">
                <h1>Смартфоны</h1>
                <div className="number-phones">
                    <span>Отобразить товары: </span>
                    <ul>
                        {numbersOfShowed.map(item => {
                            let clsName = ""
                            if (item === numberOfPhones) clsName += "active-numbers-phone"
                            return (
                                <li
                                    className={clsName}
                                    key={`${item}li`}
                                    onClick={() => dispatch(changeNumberVisible(phones, visiblePhones, item))}
                                >
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="phones-list">
                <div className="phones-list-different">
                    <input type="checkbox" onChange={() => setShowDifferences(prev => !prev)}/>
                    <span>Показать различия</span>
                </div>

                {visiblePhones.map(item => {
                    return (
                        <div className="phones-list-item" key={`${item.id}phoneList`}>
                            <div className="phones-list-item-images">
                                <img src={item.pathToImg} alt={item.model}/>
                                {   phones.length > 0 &&
                                    <ChangeWindow idPhone={item.id}/>
                                }


                            </div>
                            <span>{item.model}</span>
                        </div>
                    )
                })}
            </div>

            <div className="table-compare">
                {visiblePhones[0] && Object.keys(visiblePhones[0]).map(item => {
                    if (item !== "id" && item !== "model" && item !== "pathToImg") {
                        let flagRenderRow = false

                        if (showDifferences) {
                            const field = visiblePhones[0][item]
                            visiblePhones.map(phone => {
                                if (phone[item] !== field) flagRenderRow = true
                            })
                        }

                        //Если не включено "показать различия" и есть отлючающиеся элементы
                        if (!showDifferences || flagRenderRow) {
                            return (
                                <div className="row-table" key={item}>
                                    <div className="col-table field-info">{TranslateField[item]}</div>

                                    {
                                        visiblePhones.map(phone => {
                                            if (typeof phone[item] === "boolean") {
                                                if (phone[item]) {
                                                    return <div className="col-table field-phone" key={`${phone.id}${phone.item}`}><img src="/icons/ic-true.svg" alt="true"/></div>
                                                }
                                                return <div className="col-table field-phone" key={`${phone.id}${phone.item}`}><img src="/icons/ic-false.svg" alt="true"/></div>
                                            }
                                            return (
                                                <div className="col-table field-phone" key={`${phone.id}${phone[item]}`}>
                                                    {phone[item]}
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            )
                        }

                    }
                })}
            </div>
        </>
    )
}