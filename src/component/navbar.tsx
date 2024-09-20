
import { navItem } from "@/constent";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        {
          navItem.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}




/*
export default function Navbar(){
  return (
    
      <header className=" h-[85px] bg-[# FFFFFF]
      drop-shadow-[0_0px_3px_rgba(117,195,16,0.5)] flex items-center justify-between:">
        <div className="flex gap-2">
          <h1 className="text-[# 75C310] font-bold text [24px]">Techverse51
                  </h1>
                  <span className="text-[# 000000] font-bold text-[24px]">portfolio

                  </span>
                  
        </div>
        <nav className=" has-[44.54px]">
          <ul className="flex h-full w-full items-center justify-between gap-[46px]">
            <li>Home</li>
            <li>About</li>
            <li>Contect</li>

          </ul>

        </nav>

      </header>
    
  )
}



*/