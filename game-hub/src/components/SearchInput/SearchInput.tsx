import { Input, InputElement, InputGroup } from "@chakra-ui/react";
import styles from "./SearchInput.module.css";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) onSearch(ref.current.value);
      }}
      className={styles.form}
    >
      <InputGroup startElement={<BsSearch className={styles.searchIcon} />}>
        <Input
          className={styles.input}
          placeholder="Search games..."
          variant="subtle"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
