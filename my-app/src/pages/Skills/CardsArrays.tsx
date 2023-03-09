import { AwardCardProps, CompCardProps, CompsCardsGridProps, ExpCardProps } from "../../components/CardsGrid";
import { ChartSVG, CodeSVG, DatabaseSVG, MagGlasSVG, PenSVG } from "../../svg/compsSVG";

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
];

export const AwardsCards: AwardCardProps[] = [
    {
        title: "UVic Computer Science Co-op Report Award",
        year: "2022",
        description: "My August 2022 co-op work term report is a reflection on one of the updates I made in SaaSquatch's documentation site, which analyses various software engineering tools and practices. My report was recognised for its excellence, resulting in my receival of this award."
    },
    {
        title: "Zonta Club of Victoria's Women in Technology Award",
        year: "2022",
        description: "I was awarded this scholarship as a result of my excellence in computer science, as well as my passion for inclusivity in the field. The Zonta Club of Victoria made a post about me receiving this award, which can be foud here."
    },
    {
        title: "University of Victoria Entrance Scholarship",
        year: "2019",
        description: "As a result of academic merit, the Univeristy of Victoria awarded me this scholarship upon acceptance to the university."
    },
    {
        title: "CUPE Local 801 Geri Marchuk Memorial Bursary",
        year: "2019",
        description: "This bursary was awarded to me during my highschool graduation as a result of academic distinction. CPU Local 801 is based on the Sunshine Coast, BC, where I completed my final year of highschool."
    },
];

export const ExpCards: ExpCardProps[] = [
    {
        position: "Technical Product Analyst",
        dates: "September 2022 - Present",
        company: "SaaSquatch, Victoria, BC",
        description: "Project management and completion of major research projects for the company. Create quantitative data analysis reports using BigQuery with SQL. Conduct surveys and interviews for qualitative analysis. Conduct UX, market, competitor, user, and customer research, and present findings in research papers, reports and defences. Research projects used by company executives to make well-informed business decisions and engineering project plans."
    },
    {
        position: "Frontend React Developer",
        dates: "May 2022 - August 2022",
        company: "SaaSquatch, Victoria, BC",
        description: "Frontend web development using Typescript with React. Updated SaaSquatch’s software platform and company website, including rebuild of navigation sidebar in SaaSquatch’s documentation site (docs.saasquatch.com). Used Storybook to document code segments and maintain the company’s frontend coding standards; completed frontend and backend quality assurance. Collaborated with UI/UX designers to ensure seamless designs and implementations."
    },
    {
        position: "Student Support Services Assistant",
        dates: "November 2021 - April 2022",
        company: "University of Victoria, Victoria, BC",
        description: "Encrypted, processed, and distributed electronic and hardcopy official student transcripts. Updated student records and processed education verifications. Assisted with user testing research projects for the University of Victoria’s new course registration portal. Banner and Microsoft Office software (Excel, Outlook, and Teams)."
    },

];