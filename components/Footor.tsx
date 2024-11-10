import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-4 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <Link
          href="https://github.com/QusaiSak"
          className="text-foreground hover:text-primary transition-colors">
          <Github className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/qusai-sakerwala-7199692a8/"
          className="text-foreground hover:text-primary transition-colors">
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link
          href="mailto:qusaisakerwala@gmail.com"
          className="text-foreground hover:text-primary transition-colors">
          <Mail className="h-6 w-6" />
        </Link>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Qusai Sakerwala. All rights reserved.
      </p>
    </footer>
  );
}
