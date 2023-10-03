import Header from "./Header";
import "./MyProject.css";

export default function MyProject() {
    return (
        <div>
            <Header/>
            <h1>My projects in RMIT University</h1>
            <div class="projects">
                <div class="project1">
                    <a class="project-link" href="https://github.com/Ha-ThuyChi/ShoppingCart.git">
                        <div class="name-project">
                            <h3>Shopping Cart (Individual)</h3>
                        </div>
                        <div class="intro-project">
                            <h4><u>Intro about project:</u> This is an individual project in my course, it allows users to create a new shopping cart, create a new products, edit products, add products to the current shopping cart, display the cart amount, display all shopping carts based on their total weight.</h4>
                        </div>
                        <div class="skill-in-project">
                            <h4><u>Skills:</u><br></br>- Basics of Java<br></br>- Flow controls<br></br>- OOP concepts (Inheritance, Abstraction, Polymorphism, Encapsulation)<br></br>- Interfaces<br></br>- Java IO<br></br>- Version control tool </h4>
                        </div>
                    </a>
                </div>
                <div class="project2">
                    <a class="project-link" href="#link">
                        <div class="name-project">
                            <h3>NAME</h3>
                        </div>
                        <div class="intro-project">
                            <h4>Intro abt project: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia alias iste neque, voluptates illo consectetur doloremque ad et sapiente ipsum? Odit perspiciatis, temporibus ea enim maiores autem minus voluptatem!</h4>
                        </div>
                        <div class="skill-in-project">
                            <h4>Skills: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt vel quasi molestiae iusto nemo provident ipsam tenetur possimus asperiores suscipit id magnam culpa est, quia cumque veritatis, cupiditate ab.</h4>
                        </div>
                    </a>
                </div>
                <div class="project3">
                    <a class="project-link" href="#link">
                        <div class="name-project">
                            <h3>NAME</h3>
                        </div>
                        <div class="intro-project">
                            <h4>Intro abt project: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia alias iste neque, voluptates illo consectetur doloremque ad et sapiente ipsum? Odit perspiciatis, temporibus ea enim maiores autem minus voluptatem!</h4>
                        </div>
                        <div class="skill-in-project">
                            <h4>Skills: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate dolor voluptatibus, totam optio ex hic ullam recusandae inventore harum tempora possimus in nihil sit nisi eum assumenda pariatur sed nemo.</h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}