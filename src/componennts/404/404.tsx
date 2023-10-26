import React, { ReactNode } from 'react'
import image from "../../pages/305315121_501042908692777_6479010195782712349_n.jpg"

type Props = {
    children: ReactNode;
}

const NotFound: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <p>404</p>
            <p>not found</p>
        </div>
    )
}

export default NotFound