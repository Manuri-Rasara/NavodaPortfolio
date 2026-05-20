// DockNav.jsx
import Dock from '@/components/Dock';

import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from 'react-icons/vsc';
import Image from 'next/image';

export default function DockNav() {
  const items = [
    {
      icon:  (
        <Image
          src="/Assets/Logos/LinkedInBlack.png"
          alt="WhatsApp"
          width={64}
          height={64}
          className="object-contain"
        />
      ),
      label: 'Linkedin',
      onClick: () => alert('Home!'),
    },
    {
       icon:  (
        <Image
          src="/Assets/Logos/InstaBlack.png"
          alt="Instagram"
          width={64}
          height={64}
          className="object-contain"
        />
      ),
      label: 'Instargram',
      onClick: () => alert('Archive!'),
    },
    {
         icon:  (
        <Image
          src="/Assets/Logos/GitBlack.png"
          alt="Git"
          width={64}
          height={64}
          className="object-contain"
        />
      ),
      label: 'Github',
      onClick: () => alert('Profile!'),
    },
    {
      
      icon:  (
        <Image
          src="/Assets/Logos/WACircle.png"
          alt="LinkedIn"
          width={64}
          height={64}
          className="object-contain"
        />
      ),
      label: 'Whatsapp',
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