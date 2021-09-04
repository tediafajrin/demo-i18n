import { useRouter } from "next/dist/client/router"
import { ReactNode, useEffect } from "react"
import { useAppDispatch } from "../../hooks"
import { setLocale } from "./localeSlice"

interface Props {
    children: ReactNode
}

const Locale = ({ children }: Props) => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const locale = require(`../../../locales/${router.locale}`)

        dispatch(setLocale(locale))
    })

    return (
        <>
            {children}
        </>
    )
}

export default Locale