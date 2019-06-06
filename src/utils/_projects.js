import vignesh from '../assets/vignesh/whole.png'
import nikhil from '../assets/nikhilsuresh/whole.png'
import rnschronicles from '../assets/rnsit-chronicles/whole.png'
import spazzo from '../assets/spazzo/whole.png'
import wyr from '../assets/wyr/whole.png'
import grandmentor from '../assets/grandmentor/whole.png'
import baps from '../assets/bapusaheb/whole.png'
import aikya from '../assets/aikya/whole.png'
import yellowglove from '../assets/yellowglove/whole.png'

import yellow_dp from '../assets/yellowglove/yellow_dp.png'
// import yellow_logo from '../assets/yellowglove/logo.png'
import y_perf from '../assets/yellowglove/performance.PNG'
import yellow_home from '../assets/yellowglove/home.png'
import yellow_meet from '../assets/yellowglove/meet.png'
import yellow_services from '../assets/yellowglove/services.png'
import yellow_init from '../assets/yellowglove/initial-design.png'
import yellow_cleaners from '../assets/yellowglove/cleaners.png'
import yellow_ease from '../assets/yellowglove/ease.png'
import yellow_discount from '../assets/yellowglove/discount.png'

// vignesh
import vignesh_dp from '../assets/vignesh/dp.jpg'
import vperf from '../assets/vignesh/performance.png'
import vignesh_home from '../assets/vignesh/home.png'
import vignesh_cs from '../assets/vignesh/casestudy.png'
import vignesh_gra from '../assets/vignesh/graphics.png'
import vignesh_ill from '../assets/vignesh/illustrations.png'
import vignesh_photography from '../assets/vignesh/photos.png'

// nigil
import nikhil_dp from '../assets/nikhilsuresh/dp.jpg'
import nikhil_home from '../assets/nikhilsuresh/home.png'
import nikhil_blogs from '../assets/nikhilsuresh/blogs.png'
import nikhil_article from '../assets/nikhilsuresh/blogpost.png'
import nperf from '../assets/nikhilsuresh/performance.png'

// rnsit
import rperf from '../assets/rnsit-chronicles/performance.png'
import rns_dp from '../assets/rnsit-chronicles/dp.jpg'
import rns_home from '../assets/rnsit-chronicles/home.png'
import rns_blog from '../assets/rnsit-chronicles/blogs.png'
import rns_contact from '../assets/rnsit-chronicles/contact.png'

// spazzo
import sperf from '../assets/spazzo/performance.png'
import spazzo_dp from '../assets/spazzo/avatar.svg'
import spazzo_home from '../assets/spazzo/home.png'
import spazzo_login from '../assets/spazzo/login.png'
import spazzo_dash from '../assets/spazzo/dashboard.png'
import spazzo_newsfeed from '../assets/spazzo/newsfeed.png'
import spazzo_upload from '../assets/spazzo/upload.png'

// wyr
import wyr_home from '../assets/wyr/home.png'
import wyr_quiz from '../assets/wyr/quiz.png'
import wyr_ans from '../assets/wyr/answered.png'
import wyr_res from '../assets/wyr/results.png'
import wyr_ask from '../assets/wyr/question.png'

// grandmentor
import gm_dp from '../assets/grandmentor/dp.png'
import gperf from '../assets/grandmentor/performance.png'
import gm_home from '../assets/grandmentor/home.png'
import gm_about from '../assets/grandmentor/about.png'
import gm_ser from '../assets/grandmentor/services.png'

// baps
import baps_dp from '../assets/bapusaheb/dp.png'
import bperf from '../assets/bapusaheb/bapspatil.png'
import baps_home from '../assets/bapusaheb/home.png'
import baps_media from '../assets/bapusaheb/media.png'
import baps_work from '../assets/bapusaheb/work.png'

// aikya
import aperf from '../assets/aikya/performance.png'
import a_home from '../assets/aikya/home.png'
import a_about from '../assets/aikya/about.png'
import a_event from '../assets/aikya/events.png'

let projects = [
    {
        name: "Yellow Glove",
        desc: "Home cleaning services",
        url: "https://yellowglove.co/",
        image: yellowglove,
        category: 'MVP',
        path: 'yellow-glove',
        about: {
            dp: yellow_dp,
            bio: 'Yellow Glove is a MVP providing services in Manhattan, NYC. It lets users book or hire cleaners from the comfort of their homes with just the click of a button. This web app aims to eliminate the hassles faced by people in cleaning their homes.'
        },
        statement: 'Yellow Glove, a minimum viable product requires a minimalistic logo along with a landing page to test and validate the user demand.',
        solution: [
            {
                img: yellow_home,
                title: 'Landing Page',
                description: '"Get your life back!" was the tagline suggested to let the users know they could relax and let Yellow Glove worry about their cleaning problems.'
            },{
                img: yellow_meet,
                title: 'About Section',
                description: 'This section lets users to book a cleaning with just a single click. Zenbooker services is used to implement the same.'
            },{
                img: yellow_services,
                title: 'Our Services',
                description: 'This section provides an insight on how users can book a cleaning with other add-on options.'
            },{
                img: yellow_cleaners,
                title: 'Our Cleaners',
                description: 'This section lets users know that the cleaners are thoroughly verified, background checked and trained to ensure the best service.'
            },{
                img: yellow_ease,
                title: 'Ease of access',
                description: 'This section illustrates how the user can schedule a cleaning at their desired time in three simple steps.'
            },{
                img: yellow_discount,
                title: 'Get A Quote',
                description: 'This section renders an illustration where users can reserve a booking and avail upto 15% discount. Users can also get in touch with Yellow Glove for their queries either by mail or phone.'
            },
        ],
        solutiontext: 'I initially started designing the logo by illustrating minimal icons and trying out few typographies. After numerous sketches and redesigns, the logo shown in the about section of this page was opted. After designing the logo, I presented the following three designs for the landing page. The third design was opted which led the foundation for the development process. I appropriated React.js configured with Webpack and Babel for the development of this landing page.',
        solutionImg: yellow_init,
        tech:{
            design: 'Adobe Illustrator (Logo), Figma (Landing Page)',
            development: 'React.js / Webpack / Babel / CSS3'
        },
        performance: y_perf,
        testimonial: {
            text: 'I had the opportunity to work with Adithya. Adithya helped with the design and development of the Yellow Glove website. It was amazing to work with him, the work was remote and there was no setback, I would definitely recommend it!',
            name: 'José Mosso',
            role: 'Yellow Glove'
        }
    },{
        name: "Vignesh Kannan",
        desc: "A UI/UX Portfolio built using React.js",
        url: "https://vignesh.now.sh/",
        image: vignesh,
        category: 'Portfolio',
        path: 'vignesh-kannan',
        about: {
            dp: vignesh_dp,
            bio: 'Vignesh Kannan is a self-taught UI/UX Designer and a Mechanical Engineer from Bangalore, India. He is currently working as a UI/UX Designer at Impel Labs Private Limited, Bangalore.'
        },
        statement: 'Vignesh Kannan, a self-taught UI/UX Designer, and a Mechanical Engineer graduated with a Bachelor\'s degree in 2017. An ambition to pursue a Master\'s degree in \'Human-Computer Interaction\' raises the requirement for a personal portfolio to showcase his work to Universities. All aspects from the layout to the design of the portfolio are provided in detail by Vignesh.',
        solution: [
            {
                img: vignesh_home,
                title: 'Landing Page',
                description: 'This section provides a brief introduction about Vignesh along with links to all of his work. It also showcases some of the testimonials he has received from his colleagues.'
            },{
                img: vignesh_cs,
                title: 'Case Studies',
                description: 'Provides users with case studies for the designs of each UX projects. This section shares insights on the process behind the design of major applications.'
            },{
                img: vignesh_gra,
                title: 'Graphic Design',
                description: 'This section showcases all the latest graphics designed by Vignesh. The navigation is made simpler by including a back button and an option to move to other sections.'
            },{
                img: vignesh_ill,
                title: 'Illustrations',
                description: 'Here users can have a look at all the pixels illustrated by Vignesh. This section follows the same pattern of navigation as mentioned before providing a better user experience.'
            },{
                img: vignesh_photography,
                title: 'Photography',
                description: 'This page consists of all the latest clicks and clicking on each picture would redirect the user to the particular upload on Vignesh\'s Instagram.'
            },
        ],
        solutiontext: 'Since the project showcases a variety of designs and motion graphics which might hinder the performance on poor connections, I decided to go ahead with React.js with the CRA boilerplate. This bundles all the code and thus reduces the file size of the website. Another reason to choose React was to build reusable components for navigation and render various fields of work. The design of the blog is minimalistic and neat, without too many cluttered items and multiple colors. The navigation is also considerably made simpler for the user by providing a sitemap at each page.',
        tech:{
            design: 'Sketch / Adobe Illustrator - Designed by Vignesh Kannan',
            development: 'React.js / CSS3'
        },
        performance: vperf,
        testimonial: {
            text: 'I worked with Adithya to help develop my portfolio website. What impressed me most about him was how invested he was in the project. He made communication easy and didn’t get bogged down even after multiple revisions. Also, his knowledge as a developer is remarkable.',
            name: 'Vignesh Kannan',
            role: 'UI/UX Designer, Impel Labs Pvt Ltd.'
        }
    },
    {
        name: "Nikhil Suresh",
        desc: "A minimalistic Portfolio",
        url: "https://nik1097.github.io/",
        image: nikhil,
        category: 'Portfolio',
        path: 'nikhil-suresh',
        about: {
            dp: nikhil_dp,
            bio: 'Nikhil is a 21-year-old budding Computer Science Engineering student who initially began writing articles for his college magazine, decided to go forward by having a minimalistic blog of his own.'
        },
        statement: 'A technical blog aims at giving the user a simple understanding of concepts but at times, the design and information can seem cluttered and overwhelming. An attempt is made to design a minimalistic blog that is appealing and easy to navigate. Provisions for displaying other works of the author such as research papers and resume are to be provided.',
        solution: [
            {
                img: nikhil_home,
                title: 'Landing Page',
                description: 'The first screen that users will see when the website is visited. This page gives a brief description of the author of the blog and also his contact information.'
            },
            {
                img: nikhil_blogs,
                title: 'Blog Cards',
                description: 'Contains a brief description about each article published along with an image in depicting each article. Scrolling through presents the user with a variety of articles. '
            },
            {
                img: nikhil_article,
                title: 'Article Page',
                description: 'Every page of the article begins with the relevance of the discussed topic in today’s world. The articles proceed by providing a basic walkthrough about the concept, giving the user a fair idea about the topic.'
            },
        ],
        solutiontext: 'As the prime focus of the readership of the blog is restricted to inexperienced readers, especially students, an attempt to give the readers a basic idea and introduction to the current trending topics using very simple terms is made. After writing down the ideas and making initial sketches, we were able to arrive at a layout intended for the blog. The design of the blog is minimalistic and neat, without too many cluttered items and multiple colors. The navigation is also considerably made simpler for the user. An option to incorporate a web page for a Resume and another web page for Research papers has been provided.',
        tech:{
            design: 'Adobe XD / Adobe Illustrator',
            development: 'HTML5 / CSS3 / Javascript'
        },
        performance: nperf,
        testimonial: {
            text: 'I developed a great rapport with Adithya and his dedication in creating my website is seen in all aspects of the site. I appreciate his creative approach and attention to detail in helping me bring this blog to life.',
            name: 'Nikhil Suresh',
            role: 'student, RNSIT'
        }
    },
    {
        name: "RNS Chronicles",
        desc: "A student blog for RNSIT",
        url: "https://rnsit.now.sh/",
        image: rnschronicles,
        category: 'Blog',
        path: 'rns-chronicles',
        about: {
            dp: rns_dp,
            bio: 'The official happening page of RNSIT! where you can read about anything and everything that goes on in the campus, technical or not. Topics covered will include events, fests, projects and many other topics of interest.'
        },
        statement: 'To Design & Develop a blog for the students of RNSIT. Users are to be allowed to share their articles via a contact form. An admin is provided with access to post the selected articles on the website with a suitable interface.',
        solution: [
            {
                img: rns_home,
                title: 'Landing Page',
                description: 'The main screen gives a brief description about the blog to the user. Users can search for relevant articles via the navigation menu.'
            },{
                img: rns_blog,
                title: 'Blog Cards',
                description: 'Renders a list of blog cards with a suitable title, an image and the name of the author. Interested users can read the article with a single click and can share the article via social media.'
            },{
                img: rns_contact,
                title: 'Contact Page',
                description: 'A contact form is provided for the user to upload their articles along with few other details such as their Name, Email and their Social Media. The author is notified when the post goes live on the website.'
            }
        ],
        solutiontext: 'Since this is a student blog, I decided to keep the design as minimal as possible. The color scheme matches that of the college website. Security rules are written in Firebase to ensure the prevention of any spam requests on the site. A search bar is provided to help the user find relevant articles easily.',
        tech:{
            design: 'Adobe Illustrator',
            development: 'React.js / CSS3 / Firestore'
        },
        performance: rperf
    },
    {
        name: "Bapusaheb Patil",
        desc: "A portfolio made with React.js",
        url: "https://bapspatil.com/",
        image: baps,
        category: 'Portfolio',
        path: 'bapspatil',
        about: {
            dp: baps_dp,
            bio: 'Bapusaheb Patil is a Google Certified Android Developer and an IDF Certified UX Designer who makes apps & watchfaces. He is currently mentoring at Udacity, OpenClassrooms, MentorCruise and Codementor.'
        },
        statement: 'To build a personal website that showcases Bapusaheb\'s mobile apps & watchfaces. The website should also have articles he wrote, ones written on him in the media, and slides to his talks on stage.',
        solution: [
            {
                img: baps_home,
                title: 'Home Page',
                description: 'The home page gives the user insight on who Bapusaheb is and what he does. The three buttons help the user navigate across all the pages easily.'
            },{
                img: baps_media,
                title: 'Media',
                description: 'This page showcases all the articles written by Bapusaheb along with the ones written on him. Each card redirects the user to the particular article hosted on popular platforms such as Medium, LinkedIn and so on.'
            },{
                img: baps_work,
                title: 'Work',
                description: 'Here, the user can see and read about all the Android apps built by Bapusaheb along with his Android Watchface collections. An option to download the app or view the watchface collection is provided as well.'
            }
        ],
        solutiontext:'',
        tech:{
            design: 'Adobe XD',
            development: 'React.js / CSS3'
        },
        performance: bperf,
        testimonial: {
            text: 'Adithya built my personal portfolio that was just amazing in terms of design. We worked on a few UX projects as well. His passion for UX and UI design combined with his passion for web development is a deadly combination. The amount of effort and time he puts into his work is something that every junior developer should take note of and aspire toward. I have no doubt that someone looking to hire a Web Developer, be it for Front End or Full Stack, need not look any further than Adithya. He\'s the right man for the job and exceeds expectations even under tight deadlines.',
            name: 'Bapusaheb Patil',
            role: 'Mentor & Public Speaker'
        }
    },
    {
        name: "Grand Mentor LLC",
        desc: "A global automotive consultancy",
        url: "https://grand-mentor.com/",
        image: grandmentor,
        category: 'Company Portfolio',
        path: 'grand-mentor',
        about: {
            dp: gm_dp,
            bio: 'A global company that provides sales partnering and program management services to the automotive industry by promoting sale processes that keep the client ahead of their competitors, helping them retain and grow market share.'
        },
        statement: 'In order to maximize the company’s global outreach, we require an aesthetic website which is captivating and at the same time simple to navigate. The need of the hour is a site which loads on an array of devices and has a minimum load time.',
        solution: [
            {
                img: gm_home,
                title: 'Home Page',
                description: 'The main screen gives a brief description about the company to the user. Navigation is made simpler by minimizing the number of buttons on the main screen.'
            },{
                img: gm_about,
                title: 'About',
                description: 'This section gives an insight about the company\'s Products and Solutions. A contact form is also provided to get in touch with the company.'
            },{
                img: gm_ser,
                title: 'Services Provided',
                description: 'This section gives a detailed explanation about the services provided by the company along with it\'s office locations.'
            }
        ],
        solutiontext: 'The primary focus was on improving the layout and design of the former site. The same content had to be reused and a fresh user interface on par with today’s website designs was needed. After going through a variety of designs presented, the design most aptly suiting the requirements was elicited. Being an international organization every tiny detail was closely studied and perfected to enhance the user experience. The website turned out to be as visualized since with all design ideas and needs tended to successfully.',
        tech:{
            design: 'Adobe Illustrator',
            development: 'React.js / CSS3'
        },
        performance: gperf,
        testimonial: {
            text: 'Seamless on time project completion. All the changes at different stages of the project was well handled. Reliable and Responsive and reasonably priced. I would strongly recommend Adithya for any new website development projects.',
            name: 'Vish Kalyanadurga',
            role: 'Global Business Consultant, GrandMentorLLC'
        }
    },
    {
        name: "Spazzo",
        desc: "A UI/UX social platform (still in progress)",
        url: "https://github.com/AdithyaBhat17/spazzo",
        image: spazzo,
        category: 'UI/UX Design',
        path: 'spazzo',
        about: {
            dp: spazzo_dp,
            bio: 'Spazzo is a social networking platform for UI/UX designers. This project was created with the goal of helping designers all over the globe interact, communicate and grow together.'
        },
        statement: 'Building a spam-free, purely professional, social platform for UI and UX Designers all over the globe to interact and support each other. ',
        solution: [
            {
                img: spazzo_home,
                title: 'Landing Page',
                description: 'The home page describes what the application does to the user. The user is redirected to the newsfeed if she/he has already signed in or is asked to sign up or log in otherwise.'
            },{
                img: spazzo_login,
                title: 'Sign Up / Log In',
                description: 'Here, the user can sign up with a new account or log in with an existing account. The user is then redirected to her/his dashboard.'
            },{
                img: spazzo_dash,
                title: 'User Dashboard',
                description: 'The dashboard displays the personal details of the authenticated user along with an invite code which can be used to invite her/his fellow designers to the platform. Cards which display all the uploads of the user is also rendered.'
            },{
                img: spazzo_newsfeed,
                title: 'Newsfeed',
                description: 'This section renders all the latest uploads by the designing community. A click on each image will redirect the user to the page with a larger view of the image along with it\'s details.'
            },{
                img: spazzo_upload,
                title: 'File Upload',
                description: 'An authenticated user is allowed to upload her/his design with a suitable title and description. Once successful, the user is directed to her/his dashboard.'
            }
        ],
        solutiontext:'In today’s world every social platform is overflowing with unnecessary spam and in turn frustration in trying to filter them out. Spazzo provides users a relief from this extra work while letting them interact and grow as a whole. An invite code is provided for each user to reduce the spam uploads on the platform. Each and every design in this platform is licensed CC by 4.0 which is free to use and redistribute.',
        tech:{
            design: 'Adobe Illustrator',
            development: 'HTML5 / CSS3 / Javascript / PHP / SQLite'
        },
        performance: sperf,
    },
    {
        name: "Would you rather",
        desc: "A classic Gen-Y game",
        url: "https://wyr.now.sh/",
        image: wyr,
        category: 'Game',
        path: 'would-you-rather',
        statement: 'Building a Gen-Y game where users can participate in a poll and ask their own questions. The project rubrics are provided by Udacity. Each and every section is thoroughly reviewed by the Code Reviewer.',
        solution: [
            {
                img: wyr_home,
                title: 'Landing Page',
                description: 'The first screen a user sees if she/he is not logged in to the website. A small description about the game is provided. The user is directed to authentication section.'
            },{
                img: wyr_quiz,
                title: 'Unanswered Questions',
                description: 'Once the user has been authenticated, a set of unanswered questions are rendered. The user can participate in the poll by clicking on any suitable option. '
            },{
                img: wyr_ans,
                title: 'Answered Questions',
                description: 'Questions answered by the authenticated user are rendered here. Users are provided with an option to see the poll results. Each question answered adds a point to the user\'s scoresheet.'
            },{
                img: wyr_res,
                title: 'Results',
                description: 'The poll result along with the total number of votes are rendered. The author and time of the poll is also displayed.'
            },{
                img: wyr_ask,
                title: 'Add Question',
                description: 'Authenticated users are provided with a form where they can create their own polls. Each question asked adds a point to the user\'s scoresheet.'
            }
        ],
        tech:{
            design: 'Adobe XD',
            development: 'React.js / Redux'
        },
    },
    {
        name: "AIKYA",
        desc: "A web-app for Aikya,RNSIT",
        url: "https://rnsaikya.herokuapp.com/",
        image: aikya,
        category: 'Event',
        path: 'aikya',
        about: {
            dp: rns_dp,
            bio: 'Aikya is the annual technical fest of the Computer Science & Engineering department, RNSIT. It is a one of a kind platform which provides the student community with an opportunity to showcase their talents and hone their technical skills.'
        },
        statement: 'To build a website for the annual Inter-Collegiate technical fest, hosted by Computer Science department, RNSIT. Also provide a seamless, efficient, friendly system for online registration to events conducted at the fest.',
        solutiontext: 'Implemented a basic design and layout by heeding to the requirements and needs. The website was tailor made to fit the requirements of the fest organisers.',
        solution: [
            {
                img: a_home,
                title: 'Home Page',
                description: 'The first screen that users see when they visit the website. Provides a brief description about AIKYA and it\'s past events.'
            },{
                img: a_about,
                title: 'About Aikya',
                description: 'Provides a brief a description about AIKYA and it\'s history. Events held in the previous years are showcased in the form of an image gallery.'
            },{
                img: a_event,
                title: 'Event Registration',
                description: 'Here, the user can view the list of events being held. An option is provided to register online if the user is interested. A chatbot is present to guide the users with the registration process.'
            }
        ],
        tech:{
            design: 'Adobe XD',
            development: 'HTML5 / CSS3 / Flask / Node.js'
        },
        performance: aperf,
    }
]

export default projects;