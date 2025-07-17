import styles from './GlitchedImage.module.css';

export default function GlitchedImage(props) {
    const { src, alt, width, height, style, imageStyle } = props;

    return (
        <div className={styles.glitchedImageWrapper} style={style}>
            <img
                className="glitchedImage"
                style={{backgroundImage: `url(${src})`, maskImage: `url(${src})` ,  ...imageStyle}}
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    );
}
