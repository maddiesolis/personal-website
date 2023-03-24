import { AwardCardProps, CompCardProps, CompsCardsGridProps } from "../../components/CardsGrid";
import { ChartSVG, CodeSVG, DatabaseSVG, ListSVG, MagGlasSVG, PenSVG } from "../../svg/compsSVG";
import { ExpCardProps } from "../About/Experience";

export const CompsCards: CompCardProps[] = [
    {
        svg: <CodeSVG/>,
        title: "Web development",
        description: "My professional experience as a frontend web developer sharpened my programming abilities, as well as my knowledge and passion for upkeeping coding standards, best software engineering practices, and utilizing various tools to make web dev more efficient."
    },
    {
        svg: <ChartSVG/>,
        title: "Data analytics",
        description: "My current role at SaaSquatch is largely oriented around sharing data in digestible formats. As I have a personal interest for data visualisation, I transfer my skills in this area into my work and share analytics in creative and reader-friendly ways. "
    },
    {
        svg: <PenSVG/>,
        title: "UI/UX design",
        description: "I work closely with UI/UX designers at SaaSquatch and am currently completing a user interface centred design project at UVic. As a computer science and visual arts combined major student, I excel in designing, prototyping, and building human-compatible interfaces."
    },
    {
        svg: <MagGlasSVG/>,
        title: "Research",
        description: "I complete data-driven research projects in my current role at SaaSquatch that aim to shape the company's roadmap. I communicate my research findings through visual analytics, actionable recommendations, research papers, and research defenses."
    },
    {
        svg: <DatabaseSVG/>,
        title: "Database management",
        description: "After using BigQuery and SQL at SaaSquatch, my interest in DBM has grown significantly. I am proficient in PostgreSQL and am familiar with DB tools such as BigQuery and DataGrip."
    },
    {
        svg: <ListSVG/>,
        title: "Project management",
        description: "I use tools like Coda and Google Workspace to shape and plan projects, as well as keep track of workflow status. My interpersonal skills allow me to work very well in teams, as well as independently."
    }
];

export const AwardsCards: ExpCardProps[] = [
    {
        title: "Computer Science Co-op Report Award",
        dates: "2022",
        company: "University of Victoria, Victoria, BC",
        description: "My August 2022 co-op work term report is a reflection on one of the updates I made in SaaSquatch's documentation site, which analyses various software engineering tools and practices. My report was recognised for its excellence, resulting in my receival of this award."
    },
    {
        title: "Women in Technology Award",
        dates: "2022",
        company: "Zonta Club of Victoria, Victoria, BC",
        description: "I was awarded this scholarship as a result of my excellence in computer science, as well as my passion for inclusivity in the field. The Zonta Club of Victoria made a post about me receiving this award, which can be foud here."
    },
    {
        title: "Entrance Scholarship",
        dates: "2019",
        company: "University of Victoria, Victoria BC",
        description: "As a result of academic merit, the Univeristy of Victoria awarded me this scholarship upon acceptance to the university."
    },
    {
        title: "Geri Marchuk Memorial Bursary",
        dates: "2019",
        company: "CUPE Local 801, Gibsons, BC",
        description: "This bursary was awarded to me during my highschool graduation as a result of academic distinction. CPU Local 801 is based on the Sunshine Coast, BC, where I completed my final year of highschool."
    },
];

export const ExpCards: ExpCardProps[] = [
    {
        title: "Technical Product Analyst",
        dates: "September 2022 - Present",
        company: "SaaSquatch, Victoria, BC",
        description: "As a product analyst, I work in the research team to help product management with roadmap shaping and planning. I conduct UX, market, competitor, user, and customer research, and create data analysis reports using BigQuery and SQL. "
    },
    {
        title: "Frontend React Developer",
        dates: "May 2022 - August 2022",
        company: "SaaSquatch, Victoria, BC",
        description: "In this role, I used Typescript with React to write frontend code for SaaSquatch's platform and website. I also worked closely with UI/UX designers and completed software quality assurance."
    },
    {
        title: "Student Support Services Assistant",
        dates: "November 2021 - April 2022",
        company: "University of Victoria, Victoria, BC",
        description: "My work in Student Support Services consisted of encrypting, processing, and distributing electronic and hardcopy official student transcripts and education verifications. I also assisted with user testing and research projects for UVic's new course registration system."
    },
];