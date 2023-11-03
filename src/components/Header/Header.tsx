import Link from 'next/link';
import './header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href='/'>Thodoris</Link>
          </li>
          <li>
            <Link href='/thoughts'>Thoughts</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
