import "./Homepage.css"
import Titles from "../Titles/index.js";
import AOS from "aos"
import { useEffect } from "react";
function Homepage(state) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    var height = state.state / window.innerHeight * 3;
    console.log(height)
    return ( 
            <div className="Homepage">
                {
                    height <= 1 &&
                    <div className="words">Hi...</div>
                }
                {
                    height <= 2 && height > 1 &&
                    <div className="intro">
                        <div className="words2"> My name is </div>
                        <div className="words2 name">Tan Song Huang, Marcus</div>
                    </div>
                }
                {
                    height > 2 && Math.floor(height) <= 3 && <Titles />
                }
            </div>
        );
}

export default Homepage;