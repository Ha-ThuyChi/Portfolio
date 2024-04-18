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
                        <h3>Web developer</h3>
                        <p>I have passion with web development and my programming language is JavaScript, Node.js for backend side and React.js for frontend side. I am familiar with MySQL for the database management.</p>
                    </div>
                </div>
                <img class="intro-image" src={ require ("./profile_image.jpg") } alt=""></img>
            </div>
            <div class="projects">
                <h2>My projects</h2>
                <div class="projects">
                    <div class="project1">
                        <div class="name-project">
                            <h3>Todo App (Individual)</h3>
                        </div>
                        <div class="intro-project">
                            <h4><u>Intro about project:</u> This is an individual project. It is a todo app to assist users manage their daily tasks, and tasks with other people. It has some basic functions: </h4>
                            <h4>- Sign in and Sign up<br/>- Create, View, Update, and Delete task (or list of tasks)<br/>- Assign task to other users</h4>
                        </div>
                        <div class="skill-in-project">
                            <h4><u>Skills:</u><br/>- Node.js and React.js<br/>- MySQL with Sequelize<br/>- Version control tool</h4>
                        </div>
                        <div class="link">
                            <h4>
                                <u>Link: </u><br/>
                                <a class="project-link" href="https://github.com/Ha-ThuyChi/todo-app.git">GitHub link</a><br/>
                                <a class="project-link" href="#">Project link: #</a>
                            </h4>
                        </div>
                    </div>
                    <div class="project2">
                        <div class="name-project">
                            <h3>NAME</h3>
                        </div>
                        <div class="intro-project">
                            <h4>Intro abt project: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia alias iste neque, voluptates illo consectetur doloremque ad et sapiente ipsum? Odit perspiciatis, temporibus ea enim maiores autem minus voluptatem!</h4>
                        </div>
                        <div class="skill-in-project">
                            <h4>Skills: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt vel quasi molestiae iusto nemo provident ipsam tenetur possimus asperiores suscipit id magnam culpa est, quia cumque veritatis, cupiditate ab.</h4>
                        </div>
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
            <div >

            </div>
        </div>
    )
}