import { classNames } from "@/app/utils/utils"
import { ReactNode } from "react"

const MaxWithWrapper = ({ className, children}: {className?: string, children: ReactNode}) => {
    return (
        <div className={classNames('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
            {children}
        </div>
    )
}

export default MaxWithWrapper