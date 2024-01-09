import styles from './Display.module.css';
const Display= ({displayVal}) =>{
        return <input className={styles.text} type="text" value={displayVal} readOnly></input>
}
export default Display;