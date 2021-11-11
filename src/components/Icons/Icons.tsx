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
import GraphQL from './GraphQL'
import styles from './Icons.module.css'
import TypeScript from './TypeScript'
import Jest from './Jest'
import Npm from './Npm'
import TestingLib from './TestingLib'
import Apollo from './Apollo'

const icons = [
    TypeScript,
    ReactIcon,
    JS,
    MongoDB,
    Next,
    Node,
    Express,
    CSS,
    HTML,
    GitHub,
    Git,
    MUI,
    Redux,
    GraphQL,
    Apollo,
    Jest,
    TestingLib,
    Npm,
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