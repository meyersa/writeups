/* 
 * Poorly made solution for instead of using .content box. I'll probably just go back to using .content
 */ 

import styles from './flex.module.css';

export default function Author({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}