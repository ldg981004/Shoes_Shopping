/* eslint-disable */

import './topNav.css';

function Nav() {
    return (
      <div className="App">
        <nav className='navbar-navbar'>
            <ul className='navbar-nav'>
                <li className='nav-item'><a className='nav-link' href='https://www.nike.com/kr/w/new-releases-3n82y'>New Releases</a></li>
                <li className='nav-item'><a className='nav-link' href='https://www.nike.com/kr/men'>Men</a></li>
                <li className='nav-item'><a className='nav-link' href='https://www.nike.com/kr/women'>Women</a></li>
                <li className='nav-item'><a className='nav-link' href='https://www.nike.com/kr/kids'>Kids</a></li>
                <li className='nav-item'><a className='nav-link' href='https://www.nike.com/kr/kids'>Sale</a></li>
                <li className='nav-item dropdown'><a className='nav-link' href='https://www.nike.com/kr/launch'>SNKRS</a>
                </li>

                <form>
                    <div className='search-bar'>
                        <input className='form-control' placeholder='Search'></input>
                        <button>OK</button>
                    </div>
                </form>
            </ul> 
        </nav>
      </div>
    );
  }
  
  export default Nav;