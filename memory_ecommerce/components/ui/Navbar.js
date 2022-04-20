
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      {/* <div className="logo">
        <Image src="/logo.png" width={128} height={77} />
      </div> */}

      <Link href="/">
        <a>Anime List</a>
      </Link>
      <Link href="/anime">
        <a>About</a>
      </Link>
      <Link href="/new-anime">
        <a>Add New</a>
      </Link>
    </nav>
  );
};

export default Navbar;