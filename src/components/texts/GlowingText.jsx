import styles from './GlowingText.module.css';

export default function GlowingText(props) {
    const { children, style } = props;

    return (
        <span
            className={styles.glowingText}
        >
            {children}
        </span>
    );
}
