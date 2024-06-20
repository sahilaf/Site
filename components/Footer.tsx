import { useState, useRef, FormEvent } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'phone',
    description: '+8801936064767',
  },
  {
    icon: <FaEnvelope />,
    title: 'email',
    description: 'sahilfarib320@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Dhaka, Bangladesh',
  },
];

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    text: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.submit();
    }
    setFormValues({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      text: '',
    });
  };

  return (
    <footer className="w-screen pt-20 pb-10 px-20 bg-[#0D1B3C]" id="contact">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: 'easeIn',
          },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            <div className="lg:w-[54%] order-2 lg:order-none">
              <form
                ref={formRef}
                className="flex flex-col gap-6 p-10 bg-white rounded-lg -mx-10"
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
              >
                <h3 className="text-4xl text-[#0D1B3C]">Contact now</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    required
                    type="hidden"
                    name="access_key"
                    value="9045a580-c72d-424e-949d-15880b8f56de"
                  />
                  <Input
                    required
                    name="firstname"
                    type="text"
                    placeholder="Firstname"
                    className="bg-[#0D1B3C] text-white placeholder:text-white"
                    value={formValues.firstname}
                    onChange={handleChange}
                  />
                  <Input
                    required
                    name="lastname"
                    type="text"
                    placeholder="Lastname"
                    className="bg-[#0D1B3C] text-white placeholder:text-white"
                    value={formValues.lastname}
                    onChange={handleChange}
                  />
                  <Input
                    required
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="bg-[#0D1B3C] text-white placeholder:text-white"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <Input
                    required
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    className="bg-[#0D1B3C] text-white placeholder:text-white"
                    value={formValues.phone}
                    onChange={handleChange}
                  />
                </div>
                <Textarea
                  required
                  name="text"
                  placeholder="Type your message here."
                  className="h-[200px] bg-[#0D1B3C] text-white placeholder:text-white"
                  value={formValues.text}
                  onChange={handleChange}
                />
                <Input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />
                <Button type="submit" size="lg" className="max-e-40 bg-[#0070F2] text-white">
                  Send message
                </Button>
              </form>
            </div>
            <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex item-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px] text-[#0070F2]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Created by Sahil Al Farib
        </p>
      </div>
    </footer>
  );
};

export default Footer;
