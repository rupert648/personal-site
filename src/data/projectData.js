const projectData = [
    {
        id: "vueSocialMedia",
        title: "Vue & Rust Social Media Site",
        about: "Designed and Implemented a Federated Social Media site using the Activity Pub protocol. Created reactive VueJS frontend served by a rust (actix) backend accessing a postgres database.",
        technologies: ["Actix", "VueJS", "Postgres"],
        github: "https://github.com/fmckeogh/nebula",
        status: "Completed (Not Live)",
        completed: true,
        image: "https://rustacean.net/assets/rustacean-flat-gesture.png",
        skills: [
            {
                skillName: 'Agile Development',
                aboutSkill: 'My largest experience of agile development to date. This project taught me the importance of incremental development and developing a project with adaptability. I.E. being able to change our development process to meet agile requirements given to us by our scrum manager.'
            },
            {
                skillName: 'Team Development',
                aboutSkill: 'Working as a team is very different to working alone, particularly on larger scale project. When working at a time it is even more important to compartmentalise your own work. Completing this project to a high standard required strong interpersonal skills as well as being fluent in a range of technologies such as version control to make working together as smooth and efficient as possible.'
            },
            {
                skillName: 'Frontend Design',
                aboutSkill: 'Expecting a large number of users it was important in this project to think about how a user would be interracting with our site. To maintain a quality user experience it was important to think about UI design. This included decisions including but not limited to; accessability options, colour scheme, icon placement, aesthetics.'
            },
            {
                skillName: 'Backend Design',
                aboutSkill: 'The key thought process to maintain whilst producing the backend for this project was scalability. Every decision we made was designed to be geared toward that. Our Actix framework was exceptionally fast for a backend but despite this it was important to recognise areas which may slow down our backends response time and analyse the cost-benefit of procedures running on the backend rather than the frontend.'
            },
            {
                skillName: 'Unit Testing',
                aboutSkill: 'Particularly on the backend, it was important that incorrect, malicious or unidentified requests were handled gracefully. Equally, we needed successful requests to receive requests of the expected format, matching our designed API. Unit testing was an essential part of doing this successfully.'
            },
            {
                skillName: 'Deployment',
                aboutSkill: 'I developed an understanding on this project of how to setup an environment, to build, test and (if successful) deploy an application to be used on the real world. We used heroku to do this.'
            },
            {
                skillName: 'Database management',
                aboutSkill: 'We were managing a large database for this project with constant modification. It was important when designing it to consider things like normalisation to ensure atomicity in our database and to minimise the repetition/storage of redundant information.'
            },
        ]
    },
    {
        id: "haskellReversy",
        title: "Haskell \"reversy\" Game implementation and AI",
        about: "Used alpha beta pruning to integrate an efficient, effective AI in Haskell. Game implemented with network Capabilities for cross-machine play.",
        technologies: ["Haskell"],
        github: "",
        status: "Completed",
        completed: true,
        image: "https://res.cloudinary.com/practicaldev/image/fetch/s--G0P1KX-J--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/5sbbqt9sxzw0sspnr7at.png",
        skills: [
            {
                skillName: 'Functional Programming',
                aboutSkill: 'this project taught me many of the core concepts of functional programming; requiring me to think in a different way than I was perhaps used to.'
            },
            {
                skillName: 'AI techniques',
                aboutSkill: 'This project taught me some core AI algorithms, particularly those suited for 1v1 open board games. For example the aforementioned alpha beta pruning algorithm.'
            },
            {
                skillName: 'Team development',
                aboutSkill: 'Further strengthened my ability to work in a team, in this case during a particularly challenging time during the start of the COVID pandemic. It required us to have strong communication skills and be capable in technologies such as version control and Github.'
            }
        ]
    },
    {
        id: "universityFinder",
        title: "NodeJS & ReactJS \"University Finder\"",
        about: "Created a React web application in which users are matched to a UK university based on form answers. NodeJS API with a MongoDB database to store university information.",
        technologies: ["React", "NodeJS", "MongoDB"],
        github: "https://github.com/rupert648/UniversityFinder",
        status: "In Progress",
        completed: false,
        image: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png",
        skills: [
            {
                skillName: "NoSQL Databases",
                aboutSkill: "This project was my first introduction to building a database in a NoSQL database system, in this case MongoDB."
            },
            {
                skillName: "React",
                aboutSkill: "One of the first projects I developed in React, this project was important to understanding the core react concepts and how to build a asynchronously requesting React application."
            },
            {
                skillName: "Individual Project",
                aboutSkill: "I built this project independent of any classes in my free time. This was a key project in beginning to develop my ability to learn individually efficiently, and to use self-taught skills to develop a successful project."
            }
        ]
    },
    {
        id: "climateNewsApp",
        title: "Global climate news application",
        about: "Made as part of a 24 hour hackathon. Created a site which serves to the user climate-change themed articles retreived from a news API. These are displayed on a fully interactive globe.",
        technologies: ["React", "NodeJS"],
        github: "https://github.com/rupert648/Stacshack007",
        status: "Completed",
        completed: true,
        image: "https://www.cssmine.com/content/dist/images/original/node-js.svg",
        skills: [
            {
                skillName: "External APIs",
                aboutSkill: "We used an external API to gather the news articles to display our application. This taught me how to utilise documentation to get the most out of an external API."
            },
            {
                skillName: "Time Management/Very Short Deadline",
                aboutSkill: "As aforementioned, this project was created as part of a 24 hour hackathon. This tested both me and my teams time management skills as well as our ability to learn and retain a lot of new information in a short time. By the end of the 24 hour we had a fully working application."
            },
            {
                skillName: "Team management",
                aboutSkill: "Coming into this project I was the only member of a team of 5 who had experience developing in NodeJS and React. Therefore one of the key parts of this project was being able to offload and communicate by knowledge effectively to the other members of the team such that they could incrementally develop their own parts of the project."
            }
        ]
    },
    {
        id: "squashApp",
        title: "Squash club database and UI interface",
        about: "Project to improve my SQL skills by developing a complex SQL database with complex queries. UI built in React (with Semantic components) served by a NodeJS backend.",
        technologies: ["React", "NodeJS", "MariaDB", "SemanticUI"],
        github: "",
        status: "Completed",
        completed: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mariadb-seal-browntext.svg/2560px-Mariadb-seal-browntext.svg.png",
        skills: [
            {
                skillName: "Database Design",
                aboutSkill: "Designing a database to store all the required management whilst simultaneously ensuring the finished database design was in Boyce Codd Normal form; ensuring atomicity, consistency as well as avoiding data redundancy.",
            },
            {
                skillName: "Advanced Database Creation/Management",
                aboutSkill: "This database was created/hosted in MariaDB. In order to improve usability of the database, as well as practice my MySQL skills I tried to utilise as much of the MariaDB functionality as possible. Including but not limited to; functions, triggers, views and procedures."
            },
            {
                skillName: "Complex Query Design",
                aboutSkill: "Again this project was the perfect chance to practice my query building skills. Querys I built often utilised many relations and performed complex operations such as sub-queries, aggregate functions, views and multiple table joins."
            }
        ]
    },
    {
        id: "thisSite",
        title: "This site!",
        about: "React website with the primary goal of developing my own CSS skills and learning how to use the \"styled components\" React framework.",
        technologies: ["React", "StyledComponents", "SASS"],
        github: "https://github.com/rupert648/personal-site",
        status: "In Progress (sort of)",
        completed: false,
        image: "https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg",
        skills: [
            {
                skillName: "Deployment",
                aboutSkill: "Taught me further how to develop and deploy a site."
            },
            {
                skillName: "Responsive Site",
                aboutSkill: "One thing many of my sites had failed in was being responsive in their CSS design. This site was therefore a great chance to practice creating a design which's interface adapts to the device it is displayed on."
            },
            {
                skillName: "CSS and CSS transitions",
                aboutSkill: "As aforementioned I wanted to develop my CSS skills during this project. Therefore this site is done with nearly entirely custom compoenents, including custom transitions and CSS animations."
            }
        ]
    }
]



export default projectData;