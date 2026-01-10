import React from 'react';
import Layout from '@theme/Layout';

export default function Community() {
  return (
    <Layout title="Community" description="Where to get help, report issues, and follow TFC updates">
      <main className="container margin-vert--lg">
        <h1>Community</h1>
        <p>Pick the right channel for the right job:</p>

        <div className="row">
          <div className="col col--6">
            <div className="card">
              <div className="card__body">
                <h3>Discord</h3>
                <p>Support, coordination, announcements, and community discussion.</p>
                <a className="button button--primary" href="https://discord.gg/tz9p95qA" target="_blank" rel="noreferrer">Join Discord</a>
              </div>
            </div>
          </div>

          <div className="col col--6">
            <div className="card">
              <div className="card__body">
                <h3>GitHub</h3>
                <p>Track progress, collaborate, and host documentation + releases.</p>
                <a className="button button--secondary" href="https://github.com/TFC-Team" target="_blank" rel="noreferrer">View GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="margin-top--lg">
          <h2>Recommended setup</h2>
          <ul>
            <li><strong>Questions / help:</strong> Discord</li>
            <li><strong>Bugs / issues:</strong> GitHub Issues</li>
            <li><strong>Ideas / requests:</strong> GitHub Discussions</li>
            <li><strong>News:</strong> this site’s <a href="/blog">News</a> page</li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
