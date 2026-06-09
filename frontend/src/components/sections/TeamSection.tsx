import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import type { TeamMember } from '../../types/team';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const hasSocialLinks = Boolean(member.linkedin || member.email);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-4 shadow-xl shadow-foreground/5 transition-colors duration-300 dark:shadow-slate-950/25"
    >
      <div className="relative aspect-[4/4.4] overflow-hidden rounded-2xl border border-border bg-muted">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 via-white to-indigo-100 text-4xl font-heading font-extrabold text-primary-700 dark:from-primary-950/50 dark:via-slate-900 dark:to-indigo-950/50 dark:text-primary-300">
          {getInitials(member.name)}
        </div>
        <img
          src={member.image}
          alt={`${member.name}, ${member.designation}`}
          loading="lazy"
          decoding="async"
          width="480"
          height="528"
          className="relative h-full w-full object-cover transition duration-700 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />

        {hasSocialLinks && (
          <div className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-950 dark:text-white"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">{member.name} on LinkedIn</span>
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-950 dark:text-white"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email {member.name}</span>
              </a>
            )}
          </div>
        )}
      </div>

      <div className="space-y-3 px-1 pb-2 pt-5">
        <div>
          <h3 className="font-heading text-xl font-extrabold leading-tight text-foreground">{member.name}</h3>
          <p className="mt-1 text-sm font-bold text-primary-600 dark:text-primary-400">{member.designation}</p>
        </div>
        {member.bio && <p className="text-sm leading-relaxed text-text-sub font-medium">{member.bio}</p>}
      </div>
    </motion.article>
  );
};

export const TeamSection: React.FC = () => {
  if (!siteConfig.teamMembers.length) return null;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32" aria-labelledby="leadership-team-title">
      <div className="mx-auto max-w-7xl space-y-16">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <span className="inline-flex rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-primary-700 dark:text-primary-300">
            Leadership Team
          </span>
          <h2
            id="leadership-team-title"
            className="font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl"
          >
            Meet The Experts Behind Our Success
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our leadership team combines industry expertise, innovation, and strategic vision to deliver exceptional
            results for our clients.
          </p>
        </motion.header>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
