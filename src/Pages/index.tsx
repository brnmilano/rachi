import Header from "./Header";
import Register from "./Register";
import styles from "./styles.module.scss";
import { Box } from "@mui/system";

export default function Home() {
  return (
    <Box className={styles.container}>
      <Header />
      <Register />
    </Box>
  );
}
