import { Menu, Portal, Button } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
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
import { Platform } from "@/services/platformService";

interface Props {
  selectedPlatformId?: number;
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatformId, onSelectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
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

  const selectedPlatform = data?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="surface" size="lg">
          {selectedPlatform?.name || "Platforms"} <BsChevronBarDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.slice(0, 8).map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.slug}
                onClick={() => onSelectedPlatform(platform)}
              >
                {iconMap[platform.slug] ?? null}
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
