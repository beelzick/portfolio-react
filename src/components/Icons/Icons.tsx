import MongoDB from './MongoDB'
import ReactIcon from './ReactIcon'
import Node from './Node'
import Next from './Next'
import Express from './Express'
import CSS from './CSS'
import HTML from './HTML'
import GitHub from './GitHub'
import JS from './JS'
import MUI from './MUI'
import Git from './Git'
import Redux from './Redux'
import { v4 as uuidv4 } from 'uuid';
import styles from './Icons.module.css'

const icons = [
    MongoDB, ReactIcon, Node, Next, Express, CSS, HTML, GitHub, JS, MUI, Git, Redux
]

export default function Icons() {
    return (
        <>
            {icons.map((Icon) => (
                <div className={styles.iconContainer} key={uuidv4()}>
                    <svg viewBox='0 0 128 128' width='100%'>
                        <Icon />
                    </svg>
                </div>
            ))}
        </>
    )
}