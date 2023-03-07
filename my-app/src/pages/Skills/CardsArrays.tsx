import { AwardCardProps, CompCardProps, CompsCardsGridProps, ExpCardProps } from "../../components/CardsGrid";
import { ChartSVG, CodeSVG, DatabaseSVG, MagGlasSVG, PenSVG } from "../../svg/compsSVG";

export const CompsCards: CompCardProps[] = [
    {
        svg: <CodeSVG/>,
        title: "Web development",
        description: "Through my experience as a React developer at SaaSquatch, my problem solving and debugging abilities have become extremely fine-tuned. I am passionate about upkeeping and utilizing software engineering best practices."
    },
    {
        svg: <DatabaseSVG/>,
        title: "Database management",
        description: "After using BigQuery and SQL at SaaSquatch, my interest in DBM has grown significantly. I am proficient in PostgreSQL and am familiar with DB tools such as BigQuery and DataGrip."
    },
    {
        svg: <ChartSVG/>,
        title: "Data analytics",
        description: "As a product analyst at SaaSquatch, I complete many research projects that use both quantitative and qualitative analytics. I aim to visualise my findings in a way that caters to many different kinds of people."
    },
    {
        svg: <PenSVG/>,
        title: "UI/UX design",
        description: "I work closely with UI/UX designers at SaaSquatch and am currently completing a user interface centred design project at UVic. As a computer science and visual arts combined major student, I excel in designing, prototyping, and building human-computer interactions."
    },
    {
        svg: <MagGlasSVG/>,
        title: "Product management research",
        description: "The research I complete as a product analyst at SaaSquatch aims to guide the company’s product managers in their product shaping and roadmap planning. Thus, I am well-versed in SaaS company operations and working as part of a product management team."
    }
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
        position: "Technical Product Analyst",
        dates: "September 2022 - Present",
        company: "SaaSquatch, Victoria, BC",
        description: "Project management and completion of major research projects for the company. Create quantitative data analysis reports using BigQuery with SQL. Conduct surveys and interviews for qualitative analysis. Conduct UX, market, competitor, user, and customer research, and present findings in research papers, reports and defences. Research projects used by company executives to make well-informed business decisions and engineering project plans."
    },
    {
        position: "Technical Product Analyst",
        dates: "September 2022 - Present",
        company: "SaaSquatch, Victoria, BC",
        description: "Project management and completion of major research projects for the company. Create quantitative data analysis reports using BigQuery with SQL. Conduct surveys and interviews for qualitative analysis. Conduct UX, market, competitor, user, and customer research, and present findings in research papers, reports and defences. Research projects used by company executives to make well-informed business decisions and engineering project plans."
    },

];