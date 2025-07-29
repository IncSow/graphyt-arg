import styles from "./GlitchedImage.module.css";

export default function GlitchedImage(props) {
  const {
    className,
    src,
    alt,
    width,
    height,
    style,
    imageStyle,
    glitchType = 1,
  } = props;

  const getGlitchImage = () => {
    switch (glitchType) {
      case 1:
        return "/glitches/glitch1.webp";
      case 2:
        return "/glitches/glitch2.webp";
      case 3:
        return "/glitches/glitch3.webp";
      case 4:
        return "/glitches/glitch4.webp";
      case 5:
        return "/glitches/glitch5.webp";
      default:
        return "/glitches/glitch_round.webp";
    }
  };

  return (
    <div style={{ display: "flex", ...style }}>
      <div
        className={styles.glitchedImageWrapper}
        style={{
          "--glitch-image": `url(${getGlitchImage()})`,
          "--mask-image": `url(${src})`,
          "--delay": `-${Math.random() * 2}s`,
          "--duration": `${(Math.random() * 0.6 + 0.6).toFixed(2)}s`,
        }}
      >
        <img
          className="glitchedImage"
          style={imageStyle}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
    </div>
  );
}
