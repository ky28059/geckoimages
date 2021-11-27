import {ReactNode} from 'react';


type CardProps = { children: ReactNode, className?: string };
export default function Card(props: CardProps) {
    return (
        <div className={`bg-white rounded shadow-xl p-4 w-max ${props.className ?? ''}`}>
            {props.children}
        </div>
    )
}
