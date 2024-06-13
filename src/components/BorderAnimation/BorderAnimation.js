import styles from "./BorderAnimation.module.css";

export const BorderAnimation = ({
  children,
  top,
  right,
  bottom,
  left,
  className,
}) => {
  const defaultValues = {
    show: false,
    duration: "1s",
    delay: "0s",
    transition: "ease-in-out",
  };

  const variables = {
    "--top-border-duration": top?.duration || defaultValues.duration,
    "--right-border-duration": right?.duration || defaultValues.duration,
    "--bottom-border-duration": bottom?.duration || defaultValues.duration,
    "--left-border-duration": left?.duration || defaultValues.duration,

    "--top-border-delay": top?.delay || defaultValues.delay,
    "--right-border-delay": right?.delay || defaultValues.delay,
    "--bottom-border-delay": bottom?.delay || defaultValues.delay,
    "--left-border-delay": left?.delay || defaultValues.delay,

    "--top-border-transition": top?.transition || defaultValues.transition,
    "--right-border-transition": right?.transition || defaultValues.transition,
    "--bottom-border-transition":
      bottom?.transition || defaultValues.transition,
    "--left-border-transition": left?.transition || defaultValues.transition,
  };

  return (
    <div className={`${styles.container} ${className}`} style={variables}>
      <div className={styles.content}>{children}</div>
      <div className={styles.border}>
        <span
          className={`
            ${!top ? styles.hideBorder : ""} ${styles.borderTop} ${
            top?.reverse ? styles.borderTopReverse : ""
          }`}
        ></span>
        <span
          className={`
            ${!right ? styles.hideBorder : ""} ${styles.borderRight} ${
            right?.reverse ? styles.borderRightReverse : ""
          }`}
        ></span>
        <span
          className={`
            ${!bottom ? styles.hideBorder : ""} ${styles.borderBottom} ${
            bottom?.reverse ? styles.borderBottomReverse : ""
          }`}
        ></span>
        <span
          className={`
            ${!left ? styles.hideBorder : ""} ${styles.borderLeft} ${
            left?.reverse ? styles.borderLeftReverse : ""
          }`}
        ></span>
      </div>
    </div>
  );
};
