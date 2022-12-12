import Link from "next/link"


const Navbar = () => {
  return (
    <nav>
        <ul>
            <Link href='/' legacyBehavior>Home</Link>
            <Link href='/about' prefetch={false} legacyBehavior>About</Link>
           
        </ul>
    </nav>
  )
}

export default Navbar