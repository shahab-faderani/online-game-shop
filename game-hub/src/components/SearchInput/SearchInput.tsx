import { Input, InputGroup } from "@chakra-ui/react";
import styles from "./SearchInput.module.css";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "@/stateManagment/games/store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) setSearchText(ref.current.value);
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
