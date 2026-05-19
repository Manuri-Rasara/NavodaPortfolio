// DockNav.jsx
import Dock from '@/components/Dock';

import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from 'react-icons/vsc';

export default function DockNav() {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: 'Home',
      onClick: () => alert('Home!'),
    },
    {
      icon: <VscArchive size={18} />,
      label: 'Archive',
      onClick: () => alert('Archive!'),
    },
    {
      icon: <VscAccount size={18} />,
      label: 'Profile',
      onClick: () => alert('Profile!'),
    },
    {
      icon: <VscSettingsGear size={18} />,
      label: 'Settings',
      onClick: () => alert('Settings!'),
    },
  ];

  return (
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
}