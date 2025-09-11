import { Menu, Portal, Button, Icon } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import styles from "./PlatformSelector.module.css";
import usePlatforms from "../../hooks/usePlatforms";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();
  const iconMap: Record<string, JSX.Element> = {
    android: <FaAndroid />,
    ios: <MdPhoneIphone />,
    linux: <FaLinux />,
    mac: <FaApple />,
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    nintendo: <SiNintendoswitch />,
  };

  if (error) return null;

  return (
    <div className={styles.select}>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="surface" size="lg">
            Platforms <BsChevronBarDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {platforms.slice(0, 8).map((platform) => (
                <Menu.Item key={platform.id} value={platform.slug}>
                  {iconMap[platform.slug] ?? null}
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </div>
  );
};

export default PlatformSelector;
