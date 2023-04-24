import { h } from 'preact';
import styles from './style.css';

const Index = () => {
  return (
    <div className={styles.index}>
      <h2>What we're going for:</h2>
      <div>
        <iframe
          width="840"
          height="473"
          src="https://www.youtube.com/embed/kqUR3KtWbTk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <h2>What we have so far:</h2>
      <ul>
        <li>
          <a href="/base">Random Character using JavaScript</a>
        </li>
        <li>
          <a href="/base">Random Character using CSS Positioning</a>
        </li>
      </ul>
    </div>
  );
};

export default Index;
