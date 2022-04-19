import styles from "./styles.module.scss";

interface Props {
  type?: string;
  name?: string;
  placeholder?: any;
  background?: string;
  padding?: string;
  borderRadius?: number;
  fontSize?: number;
  width?: undefined;
  border?: any;
}

export default function Input({
  type,
  name,
  placeholder,
  background,
  padding,
  borderRadius,
  fontSize,
  width,
  border = "1px solid #000000",
}: Props) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      id={name}
      type={type}
      style={{
        background,
        padding,
        borderRadius,
        fontSize,
        width,
        border,
      }}
    />
  );
}
