import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardProps, CardsGridProps } from "../../components/CardsGrid";
import { ChartSVG, CodeSVG, DatabaseSVG, MagGlasSVG, PenSVG } from "../../svg/compsSVG";

export const CompsCards: CardProps[] = [
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