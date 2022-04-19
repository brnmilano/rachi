import styles from "./styles.module.scss";
import { Box } from "@mui/system";

interface Props {
  children?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  alignItems?: string;
  fontStyle?: string;
  textDecoration?: string;
}

export default function Text({
  children,
  color,
  fontSize,
  fontWeight,
  alignItems,
  fontStyle = "normal",
  textDecoration = "none",
}: Props) {
  return (
    <Box
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
    </Box>
  );
}
