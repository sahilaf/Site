import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { FC } from 'react';

interface Social {
  icon: JSX.Element;
  path: string;
}

const socials: Social[] = [
  { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100005254758903" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/dr_shaidul_hoque/" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaTwitter />, path: "" },
  
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
