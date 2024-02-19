import styles from './flex.module.css';

export default function Author({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}