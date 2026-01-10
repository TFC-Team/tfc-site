import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './showcase.module.css';

const items = [
  { title: 'Armoured Vehicles', desc: 'LAV family, tracked platforms, and supporting vehicles.', img: '/img/placeholder-armour.png', to: '/docs/showcase/armour' },
  { title: 'Aircraft', desc: 'Rotary and fixed-wing platforms, from utility to strike.', img: '/img/placeholder-air.png', to: '/docs/showcase/air' },
  { title: 'Weapons & Systems', desc: 'Weapon packs, sensors, and supporting systems.', img: '/img/placeholder-weapons.png', to: '/docs/showcase/weapons' },
  { title: 'Gear & Uniforms', desc: 'CAF-inspired equipment, uniforms, and loadouts.', img: '/img/placeholder-gear.png', to: '/docs/showcase/gear' },
];

function Card({title, desc, img, to}) {
  return (
    <div className={styles.card}>
      <div className={styles.thumb} style={{backgroundImage: `url(${img})`}} />
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <Link to={to}>Open →</Link>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <Layout title="Showcase" description="TFC mod showcase with images and how-to">
      <main className="container margin-vert--lg">
        <div className={styles.header}>
          <h1>Mod Showcase</h1>
          <p>Browse TFC content by category. Each section is designed to include screenshots, how-to usage, and known notes.</p>
          <div className={styles.actions}>
            <Link className="button button--primary" to="/docs/getting-started">Getting Started</Link>
            <a className="button button--secondary" href="https://discord.gg/tz9p95qA" target="_blank" rel="noreferrer">Ask in Discord</a>
          </div>
        </div>

        <div className={styles.grid}>
          {items.map((x) => <Card key={x.title} {...x} />)}
        </div>
      </main>
    </Layout>
  );
}
