import Header from "./Header";
import "./MyProject.css";

export default function MyProject() {
    return (
        <div>
            <Header/>
            <h1>My projects in RMIT University</h1>
            <div class="projects">
                <div class="project1">
                    <div class="name-project">
                        <h3>Todo App (Individual)</h3>
                    </div>
                    <div class="intro-project">
                        <h4><u>Intro about project:</u> This is an individual project. It is a todo app to assist users manage their daily tasks, and tasks with other people. It has some basic functions: </h4>
                        <h4>- Sign in, Sign up and Sign out.<br/>- Create, View, Update, and Delete list of tasks.<br/>- Create, View, Update, and Delete tasks in the list.<br/>- Assign task to other users.<br/>
                        - View and Update my profile.</h4>
                    </div>
                    <div class="skill-in-project">
                        <h4><u>Skills:</u><br/>- HTML and SCSS.<br/>- Node.js, React.js, Express.js.<br/>- MySQL with Sequelize<br/>- Postman.<br/>- Version control tool (Github)</h4>
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
            </div>
        </div>
    )
}