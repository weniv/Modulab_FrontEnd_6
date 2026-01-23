import styles from './A.module.css'
import B from './B.jsx';

function A() {
    return (
        <div className={styles.background}>
            hello
            <B/>
        </div>
    );
}

export default A;