import { Input, InputElement, InputGroup } from "@chakra-ui/react";
import styles from "./SearchInput.module.css";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch className={styles.searchIcon}/>}>
      <Input
        className={styles.input}
        placeholder="Search games..."
        variant="subtle"
      />
    </InputGroup>
  );
};

export default SearchInput;
