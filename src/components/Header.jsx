import { useState } from "react";
import { NavLink } from "react-router";

function Header(){
    function changeTheme(bgc,fgc){
    if(!(bgc && fgc)){
        document.documentElement.style.setProperty("--fgc", bgc&&fgc? fgc :(isLight? "rgb(146, 249, 249)" : "#2f2e00"));
        document.documentElement.style.setProperty("--bgc", bgc&&fgc? bgc :(isLight? "#1a2131" : "#ffffb0"));
    }
    setIsLight(!isLight);
    }
    let [isLight,setIsLight] = useState(false);




    return(
<div className="sticky flex top-0 z-50 bg-(--bgc) border-b-2 text-2xl 
 [&>*]:p-2 *:not-last:border-r-2 *:hover:bg-(--lbgc) ">


    <NavLink to="/"
    >Home</NavLink>

    <NavLink to="/click-counter"
    >Click-Counter</NavLink>

    <NavLink to="pass-gen">
        Password-Genrator
    </NavLink>

    <NavLink to="todos">
        To-Dos
    </NavLink>
    <button onClick={()=>changeTheme()} className="align-midd">{isLight?"Dark":"Light"}</button>
</div>
    )
}
export default Header
