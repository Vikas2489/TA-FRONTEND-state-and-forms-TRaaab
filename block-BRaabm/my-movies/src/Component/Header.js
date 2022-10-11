import pic from '../images/IMDB_Logo.svg.png';

function Header() {
  return (
    <>
      <header className="bg-black py-5 mb-8 border-b-slate-100">
        <div className="container w-4/5   m-auto flex items-center justify-between text-white">
          <div className="w-24">
            <img src={pic} alt="logo" />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li className="hover:underline">
                <a href="#">Home</a>
              </li>
              <li className="hover:underline">
                <a href="#">About</a>
              </li>
              <li className="hover:underline">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
