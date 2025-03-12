import { CompCardProps } from "../../components/CardsGrid";
import { ChartSVG, CodeSVG, DatabaseSVG, ListSVG, MagGlasSVG, PenSVG } from "../../svg/compsSVG";
import { ExpCardProps } from "../About/Experience";

export const CompsCards: CompCardProps[] = [
    {
        svg: <CodeSVG/>,
        title: "Web development",
        description: "My professional experience as a full stack web developer has sharpened my programming abilities, as well as my knowledge and passion for upkeeping coding standards, best software engineering practices, and utilizing various tools to make web dev more efficient."
    },
    {
        svg: <ChartSVG/>,
        title: "Data analytics",
        description: "My role at SaaSquatch was largely oriented around sharing data in digestible formats. As I have a personal interest for data visualisation, I transfer my skills in this area into my work and share analytics in creative and viewer-friendly ways. "
    },
    {
        svg: <PenSVG/>,
        title: "UI/UX design",
        description: "I have professional experience in UI/UX design and a personal interest in human-computer interaction. As a computer science and visual arts combined major student, I excel in designing, prototyping, and building human-compatible interfaces."
    },
    {
        svg: <MagGlasSVG/>,
        title: "Research",
        description: "At SaaSquatch, I completed data-driven research projects that aimed to shape the company's roadmap. I communicated my research findings through visual analytics, actionable recommendations, research papers, and research presentations."
    },
    {
        svg: <DatabaseSVG/>,
        title: "Database management",
        description: "A large part of my role at Cognito Health involved database management. This included writing SQL queries using TypeORM's QueryBuilder, generating database migrations, and running manual backfill queries."
    },
    {
        svg: <ListSVG/>,
        title: "Project management",
        description: "I use tools like Notion and Coda to shape and plan projects, as well as keep track of workflow status. My experience in various development team environments has strengthened my commitment to promoting collaboration, adaptability, and knowledge-sharing among software developers."
    }
];

export const AwardsCards: ExpCardProps[] = [
    {
        title: "Zonta Women in STEM Award",
        dates: "2022",
        company: "Zonta Club of Victoria, Victoria, BC",
        description: "This scholarship was awarded to me in recognition of my excellence in computer science and my commitment to fostering inclusivity in the field. My passion for combining computer science with visual arts has driven my unique approach to problem-solving and design, further contributing to my achievement."
    },
    {
        title: "Computer Science Co-op Report Scholarship",
        dates: "2022",
        company: "University of Victoria, Victoria, BC",
        description: "My August 2022 co-op work term report is a reflection on one of the updates I made in SaaSquatch's documentation site, which analyses various software engineering tools and practices. My report was recognised for its excellence, resulting in my receival of this award."
    },
    {
        title: "UVic Entrance Scholarship",
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
        title: "Full Stack Software Developer",
        dates: "May 2023 - October 2023, May 2024 - February 2025",
        company: "Cognito Health, Victoria, BC",
        description: "At Cognito Health, I actively participated in every stage of the development cycle, from sprint planning to deploying production-ready code. I developed the company’s healthcare web portals using a React frontend (Typescript), a RESTful API in NestJS, and a MySQL database managed with TypeORM."
    },
    {
        title: "Frontend Software Developer / Product Analyst",
        dates: "May 2022 - April 2023",
        company: "SaaSquatch, Victoria, BC",
        description: "In this role, I used TypeScript with React to write frontend code for SaaSquatch's platform and website, collaborating closely with UI/UX designers and conducting software quality assurance. As a product analyst, I supported the research team in shaping the product roadmap by conducting UX, market, competitor, user, and customer research, and creating data analysis reports using BigQuery and SQL."
    },
    {
        title: "Student Support Services Assistant",
        dates: "November 2021 - April 2022",
        company: "University of Victoria, Victoria, BC",
        description: "My work in Student Support Services consisted of encrypting, processing, and distributing electronic and hardcopy official student transcripts and education verifications. I also assisted with user testing and research projects for UVic's new course registration system."
    },
];