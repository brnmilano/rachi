import { Box } from "@mui/system";
import Text from "../../Components/Text";
import styles from "./styles.module.scss";

export default function Register() {
  return (
    <Box className={styles.container}>
      <Box>
        <Text color="#293145" fontSize={48}>
          Rachi, é tudo que você precisa em um só lugar.
        </Text>
      </Box>
    </Box>
  );
}
