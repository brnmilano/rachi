import Logo from "./Assets/logo.png";
import styles from "./styles.module.scss";
import { Box } from "@mui/system";
import Text from "../../Components/Text";

export default function Header() {
  return (
    <Box className={styles.container}>
      <img src={Logo} alt="Logo Rachi" />

      <Box className={styles.headerTexts}>
        <a href="/">
          <Text fontSize={18} color="#6E7275">
            Funcionalidades
          </Text>
        </a>

        <a href="/">
          <Text fontSize={18} color="#6E7275">
            App
          </Text>
        </a>

        <a href="/">
          <Text fontSize={18} color="#6E7275">
            Planos
          </Text>
        </a>

        <a href="/">
          <Text fontSize={18} color="#6E7275">
            Contato
          </Text>
        </a>
      </Box>
    </Box>
  );
}
