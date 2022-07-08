import "./Titles.css"

function Titles() {
    const number = 0
    return ( 
        <div className="titles">
            <div className="words">
                I am a
            </div>
            <div className="words title">
               { number === 0 && "Renaissance Engineering Scholar"}
               { number === 1 && "Product Manager"}
            </div>
        </div>
     );
}

export default Titles;