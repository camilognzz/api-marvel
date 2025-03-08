interface NavbarProps {
    brand: string;
}
const Navbar = ({brand}:NavbarProps) => {
  return (
    <div className="text-center">
        <nav>
            <a href="/">{brand}</a>
        </nav>
    </div>
  )
}

export default Navbar