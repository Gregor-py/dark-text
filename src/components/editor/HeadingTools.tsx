import ButtonsGroup from "@/components/editor/ButtonsGroup";
import { Button } from "@chakra-ui/react";
import { Editor } from "@tiptap/react";
import { FC } from "react";
import Select, { SingleValue } from "react-select";

interface Option {
  value: string;
  label: string;
}

const HeadingTools: FC<{ editor: Editor }> = ({ editor }) => {
  const options: Option[] = [
    { value: "none", label: "None" },
    { value: "h1", label: "Heading 1" },
    { value: "h2", label: "Heading 2" },
    { value: "h3", label: "Heading 3" }
  ];
  const handleChange = (newValue: SingleValue<Option>) => {
    if (newValue?.value === "h1") {
      editor.chain().focus().toggleHeading({ level: 1 });
    }
    if (newValue?.value === "h2") {
      editor.chain().focus().toggleHeading({ level: 2 });
    }
    if (newValue?.value === "h3") {
      editor.chain().focus().toggleHeading({ level: 3 });
    }
  };
  return (
    <ButtonsGroup>
      <Button onClick={() => editor.chain().focus().setHeading({ level: 1 })}>
        H1
      </Button>
      <Select
        onChange={handleChange}
        defaultValue={{ value: "none", label: "None" }}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#3182CE",
            border: "none",
            cursor: "pointer",
            height: 32,
            minHeight: 32,
            width: 130
          }),
          singleValue: (baseStyle) => ({
            ...baseStyle,
            color: "#fff"
          }),
          option: (baseStyle) => ({
            ...baseStyle,
            color: "#fff",
            backgroundColor: "#3182CE",
            margin: "5px 0",
            borderRadius: "10px",
            padding: "4px 10px",
            display: "flex",
            cursor: "pointer"
          }),
          menu: (baseStyle) => ({
            ...baseStyle,
            padding: "0 5px",
            backgroundColor: "#2C5282",
            borderRadius: 8
          })
        }}
        options={options}
        isSearchable={false}
      />
    </ButtonsGroup>
  );
};

export default HeadingTools;
