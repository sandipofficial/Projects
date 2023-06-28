import './countDisplay.css'
function countDisplay(){

    const symbol1 = "-"
    const symbol2 = "+"
    let count = 0


    return(
        <div>
            <div>
                <span>{symbol1}</span>
                <span>{count}</span>
                <span>{symbol2}</span>
            </div>
        </div>
    )
}


export default countDisplay;