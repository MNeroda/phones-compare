import React, {useEffect, useRef, useState} from "react";
import "./styles.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {swapVisible} from "../../store/action-creators/phones";

interface IProps {
    idPhone: number,
}

export const ChangeWindow = ({ idPhone }: IProps) => {
    const [visibleDialogWindow, setVisibleDialogWindow] = useState(false)
    const [searchField, setSearchField] = useState("")
    const dialogRef = useRef(null)

    const {phones, visiblePhones} = useTypedSelector(state => state.phones)
    const dispatch = useDispatch()

    useEffect(() => {
        const listener = (e: MouseEvent) => {
            if (e.target === dialogRef.current) {
                setVisibleDialogWindow(false)
            }
        }
        document.addEventListener("click", listener)

        return () => {
            document.removeEventListener("click", listener)
        }
    }, [visibleDialogWindow])

    return (
        <>
            {visibleDialogWindow &&
                <div className="overlay" ref={dialogRef}></div>
            }
            <img
                src="/icons/change-phones.svg"
                alt="change phone"
                onClick={() => setVisibleDialogWindow(prev => !prev)}
            />
            {visibleDialogWindow &&
                <div className="ic-change">
                    <div className="dialog">
                        <div className="dialog-content">
                            {
                                phones.length > 3 &&
                                <div className="dialog-content-input">
                                    <input
                                        type="text"
                                        placeholder="Поиск"
                                        value={searchField}
                                        onChange={(e) => setSearchField(e.target.value)}
                                    />
                                </div>
                            }

                            {phones.length > 0 &&
                                phones.map(phone => {
                                    if (phone.model.toLowerCase().includes(searchField.toLowerCase())) {
                                        return (
                                            <div className="dialog-content-item" key={`${phone.id}search`}>
                                                <img
                                                    src="/icons/ic-replace-phone.svg"
                                                    alt="replace"
                                                    onClick={() => dispatch(swapVisible(phones, visiblePhones, idPhone, phone.id))}
                                                />
                                                <img src={phone.pathToImg} alt={phone.model} height="50px"/>
                                                <span>{phone.model}</span>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}