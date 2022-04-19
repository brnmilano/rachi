import styles from "./styles.module.scss";

interface Props {
  onClick: any;
  children?: string;
  backgroundColor?: string;
  padding?: string;
  fontWeight?: number;
  borderRadius?: number;
}

export default function Button({
  onClick,
  children,
  backgroundColor,
  padding,
  fontWeight,
  borderRadius,
}: Props) {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor,
        borderRadius,
        padding,
        fontWeight,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
