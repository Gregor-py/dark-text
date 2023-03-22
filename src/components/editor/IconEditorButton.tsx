import { Icon, IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

interface IconEditorButton {
  onClick: () => void;
  ariaLabel: string;
  icon: IconType;
  isActive: boolean;
}

const IconEditorButton: FC<IconEditorButton> = ({
  onClick,
  icon,
  isActive,
  ariaLabel
}) => {
  return (
    <IconButton
      onClick={() => onClick()}
      aria-label={ariaLabel}
      icon={<Icon as={icon} w={5} h={5} />}
      size={"sm"}
      colorScheme={isActive ? "blackAlpha" : "blue"}
    />
  );
};

export default IconEditorButton;
