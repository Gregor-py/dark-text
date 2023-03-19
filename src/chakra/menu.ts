import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const helpers = createMultiStyleConfigHelpers(["menu", "list", "item"]);

export const Menu = helpers.defineMultiStyleConfig({
  baseStyle: {
    menu: {
      borderColor: "black"
    },
    item: {
      bg: "bg.200"
    },
    list: {
      bg: "bg.200"
    }
  }
});
