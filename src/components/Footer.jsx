import { ArrowUp } from "lucide-react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
      </p>
      <div className="flex space-x-4 justify-center">
        <a href="https://www.linkedin.com/in/muhammad-aslan-ashraf-8883032ba" target="_blank">
          <Linkedin />
        </a>
        <a href="#" target="_blank">
          <Twitter />
        </a>
        <a href="#" target="_blank">
          <Instagram />
        </a>
        <a href="#" target="_blank">
          <Twitch />
        </a>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
