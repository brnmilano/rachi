import styles from "./styles.module.scss";

interface Props {
  children?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  alignItems?: string;
  fontStyle?: string;
  textDecoration?: string;
}

export default function Heading({
  children,
  color,
  fontSize,
  fontWeight,
  alignItems,
  fontStyle = "normal",
  textDecoration = "none",
}: Props) {
  return (
    <div
      className={styles.text}
      style={{
        color,
        fontSize,
        fontWeight,
        alignItems,
        fontStyle,
        textDecoration,
      }}
    >
      {children}
    </div>
  );
}
