import Header from "./Header";
import "./Home.css";


export default function Home() {
    return (
        <div>
            <Header/>
            <div class="intro">
                <div class="intro-text">
                    <div class="name">
                        <h1>HA THUY CHI</h1>
                        <h2>she/her</h2>
                    </div>
                    <div class="position">
                        <p>position</p>
                    </div>
                </div>
                <img class="intro-image" src={ require ("./profile_image.jpg") } alt=""></img>
            </div>
        </div>
    )
}