const Navbar=()=>{
    return (
<header>
   <div className = "navbar">
    <h1 className = "navbar__brand"><a href="index.html">Shop Inc.</a></h1>    
      {/* create div */}
     <nav className = "navbar__nav">
      {/* //create navbuttons */}
<ul className = "navbar__nav__list">
   {/* //   iterate through args,create li with button with arg */}
   <li className = "menu-item">
      <a className = "nav-link" href="/">Home</a>
      </li>

        <li className = "menu-item">
      <a className = "nav-link" href="/shop">Shop</a>
      </li>

      <li className = "menu-item">
      <a className = "nav-link" href="/cart">Cart</a>
      </li>
</ul>
</nav>


</div>

    </header>
    )
}

export default Navbar;