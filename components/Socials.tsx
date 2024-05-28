import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { FC } from 'react';

interface Social {
  icon: JSX.Element;
  path: string;
}

const socials: Social[] = [
  { icon: <FaInstagram />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaFacebook />, path: "" },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials: FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
