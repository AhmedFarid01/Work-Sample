import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { identity } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-310 gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <p className="font-display text-3xl italic">
            Good products deserve solid ground.
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            A considered engineering partner for teams who care what happens
            after the launch tweet.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm lg:items-end">
          <a
            href={`mailto:${identity.email}`}
            className="flex items-center gap-2 transition hover:text-primary"
            data-testid="link-footer-email"
          >
            <Mail size={15} />
            {identity.email}
          </a>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={15} />
            {identity.location}
          </span>
          <div className="mt-3 flex items-center gap-4 text-muted-foreground">
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              aria-label="GitHub placeholder"
              className="transition hover:text-foreground"
              data-testid="link-footer-github"
            >
              <Github size={17} />
            </a>
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              aria-label="LinkedIn placeholder"
              className="transition hover:text-foreground"
              data-testid="link-footer-linkedin"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-310 flex-col gap-2 border-t border-border/65 px-5 py-5 font-mono-label text-[9px] uppercase tracking-[.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <span>
          © {new Date().getFullYear()} {identity.name}
        </span>
        <span>Available for thoughtful work</span>
      </div>
    </footer>
  );
}