// Write your code here.
import "./index.css";
function Banner(props) {
    const { bannerCardsList } = props;
    const { headerText, description, className } = bannerCardsList;
    return <li key={bannerCardsList.id} className={`${className} card`} >
        <div>
            <h1>{headerText}</h1>
            <p>{description}</p>
            <button>Show more</button>
        </div>
    </li>;
}


export default Banner;