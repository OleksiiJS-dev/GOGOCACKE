import React, { ReactNode } from 'react'
import image from "../../pages/305315121_501042908692777_6479010195782712349_n.jpg"

type Props = {
    children: ReactNode;
    styles: string;
}

const Main: React.FC<Props> = ({ children, styles }) => {
    return (
        <div className={styles}>
            <div className='header'>GO</div>
            <div className='main'>
                <p>Gogocake</p>
                <img src={image} alt="" />
            </div>
            <div className='footer'></div>

        </div>
    )
}

export default Main