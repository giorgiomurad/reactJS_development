function Header() {

  return <header className="text-center mb-6">
    <img className="object-contain w-24 m-auto md:w-52" src="logo.png" alt="Logo" />
    <h1 className="text-3xl m-3 text-amber-800 capitalize font-title font-extralight md:text-7xl">ReactArt</h1>
    <h3 className="text-xl text-stone-500">A community of artists and art lovers</h3>
  </header>
}

export default Header;