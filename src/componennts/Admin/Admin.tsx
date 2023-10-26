import React, { ReactNode } from 'react'
type Props = {
    children: ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
    return (
        <div>
        Admin
        </div>
    )
}

export default Main