import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <img className={styles.logo} src="/img/tfc-logo.png" alt="TFC logo" />
          <div>
            <h1 className={styles.title}>Task Force Canada (TFC)</h1>
            <p className={styles.subtitle}>
              Task Force Canada is a small mod team based mostly in Canada, developing the Canadian Armed Forces – 
              Task Force Canada mod for the Bohemia Interactive military simulator ArmA 3.
            </p>
            <div className={styles.ctas}>
              <Link className="button button--primary button--lg" to="/docs/install">
                Install
              </Link>
              <Link className="button button--secondary button--lg" to="/showcase">
                Mod Showcase
              </Link>
              <Link className="button button--secondary button--lg" to="/blog">
                News
              </Link>
            </div>
            <div className={styles.quickLinks}>
              <a href="https://discord.gg/tz9p95qA" target="_blank" rel="noreferrer">Join Discord</a>
              <span>•</span>
              <a href="https://github.com/TFC-Team" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, to}) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={to}>Learn more →</Link>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="Task Force Canada (TFC) Arma 3 mod website">
      <Hero />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              <FeatureCard
                title="CAF Assets & Concepts"
                description="Showcasing Canadian Armed Forces equipment — plus select conceptual platforms we believe are coming in real life."
                to="/showcase"
              />
              <FeatureCard
                title="Docs That Players Actually Use"
                description="Install steps, load order guidance, server setup notes, and practical how-to pages."
                to="/docs/getting-started"
              />
              <FeatureCard
                title="News & Patch Notes"
                description="Keep your community current with releases, changes, and upcoming milestones."
                to="/blog"
              />
              <FeatureCard
                title="Community Support"
                description="Direct players to Discord for help, and GitHub for issues, tracking, and contributions."
                to="/community"
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <h2>Quick Start</h2>
            <ol className={styles.steps}>
              <li><strong>Install</strong> using the guide and recommended mod preset.</li>
              <li><strong>Join Discord</strong> for support, updates, and community events.</li>
              <li><strong>Check the Showcase</strong> to see what’s included and how to use it.</li>
            </ol>
            <div className={styles.ctas}>
              <Link className="button button--primary" to="/docs/install">Install Guide</Link>
              <Link className="button button--secondary" to="/community">Community</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
