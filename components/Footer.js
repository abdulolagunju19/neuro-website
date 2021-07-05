import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer>
      <hr/>
      <div>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>
              About
            </a>
          </Link>
          <Link href="/">
            <a>
              Newsletter
            </a>
          </Link>
          <ExternalLink href="https://twitter.com">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/abdulolagunju19">GitHub</ExternalLink>
        </div>
      </div>
    </footer>
  );
}
