export const TranslateField: any = {
    manufacturer: "ПРОИЗВОДИТЕЛЬ",
    releaseYear: "ГОД",
    screenSize: "ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)",
    producingCountry: "СТРАНА ПРОИЗВОДИТЕЛЬ",
    memorySize: "ОБЪЕМ ПАМЯТИ",
    screenRefreshRate: "ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА",
    NFC: "NFC",
    ESIM: "ПОДДЕРЖКА ESIM",
    wirelessCharge: "ПОДДЕРЖКА БЕСПРОВОДНОЙ ЗАРЯДКИ",
    cost: "СТОИМОСТЬ"
}

interface IPhones {
    id: number
    model: string
    pathToImg: string
    manufacturer: string
    releaseYear: number
    screenSize: string
    producingCountry: string
    memorySize: string
    screenRefreshRate: string
    NFC: boolean
    ESIM: boolean
    wirelessCharge: boolean
    cost: string
}

export const phones: IPhones[] = [
    {
        id: 1,
        model: "Apple IPhone 12",
        pathToImg: "/phones/phone-3.png",
        manufacturer: "Apple",
        releaseYear: 2020,
        screenSize: "6,1",
        producingCountry: "Китай",
        memorySize: "128 ГБ",
        screenRefreshRate: "60 Гц",
        NFC: false,
        ESIM: true,
        wirelessCharge: true,
        cost: "81 990 р."
    },
    {
        id: 2,
        model: "Xiaomi Mi 11",
        pathToImg: "/phones/phone-2.png",
        manufacturer: "Xiaomi",
        releaseYear: 2021,
        screenSize: "6,55",
        producingCountry: "Китай",
        memorySize: "128 ГБ",
        screenRefreshRate: "60 Гц",
        NFC: true,
        ESIM: true,
        wirelessCharge: false,
        cost: "90 990 р."
    },
    {
        id: 3,
        model: "Apple IPhone 11",
        pathToImg: "/phones/phone.png",
        manufacturer: "Apple",
        releaseYear: 2020,
        screenSize: "6,1",
        producingCountry: "Китай",
        memorySize: "128 ГБ",
        screenRefreshRate: "90 Гц",
        NFC: true,
        ESIM: true,
        wirelessCharge: false,
        cost: "27 490 р."
    },
    {
        id: 4,
        model: "Apple IPhone 10",
        pathToImg: "/phones/phone.png",
        manufacturer: "Apple",
        releaseYear: 2020,
        screenSize: "6,1",
        producingCountry: "Китай",
        memorySize: "128 ГБ",
        screenRefreshRate: "60 Гц",
        NFC: false,
        ESIM: true,
        wirelessCharge: true,
        cost: "81 990 р."
    },
    {
        id: 5,
        model: "Apple IPhone 13",
        pathToImg: "/phones/phone.png",
        manufacturer: "Apple",
        releaseYear: 2020,
        screenSize: "6,1",
        producingCountry: "Китай",
        memorySize: "128 ГБ",
        screenRefreshRate: "60 Гц",
        NFC: false,
        ESIM: true,
        wirelessCharge: true,
        cost: "81 990 р."
    },
    {
        id: 6,
        model: "Apple IPhone 14",
        pathToImg: "/phones/phone.png",
        manufacturer: "Apple",
        releaseYear: 2020,
        screenSize: "6,1",
        producingCountry: "Китай",
        memorySize: "128 ГБ",
        screenRefreshRate: "60 Гц",
        NFC: false,
        ESIM: true,
        wirelessCharge: true,
        cost: "81 990 р."
    },
    {
        id: 7,
        model: "Apple IPhone 15",
        pathToImg: "/phones/phone.png",
        manufacturer: "Apple",
        releaseYear: 2020,
        screenSize: "6,1",
        producingCountry: "Китай",
        memorySize: "128 ГБ",
        screenRefreshRate: "60 Гц",
        NFC: false,
        ESIM: true,
        wirelessCharge: true,
        cost: "81 990 р."
    },
    {
        id: 8,
        model: "Apple IPhone 16",
        pathToImg: "/phones/phone.png",
        manufacturer: "Apple",
        releaseYear: 2020,
        screenSize: "6,1",
        producingCountry: "Китай",
        memorySize: "128 ГБ",
        screenRefreshRate: "60 Гц",
        NFC: false,
        ESIM: true,
        wirelessCharge: true,
        cost: "81 990 р."
    }

]