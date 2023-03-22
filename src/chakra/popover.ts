import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const helpers = createMultiStyleConfigHelpers(["popover", "content", "item"]);

export const Popover = helpers.defineMultiStyleConfig({
  baseStyle: {
    content: {
      bg: "bg.200"
    }
  }
});
