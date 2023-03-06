import styled from "styled-components";

export const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: 50px 166px 100px 166px; */
    margin-top: 50px;
    gap: 50px;
`
export const AboutContentDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
`
export const AboutLeftSideDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin: 160px;
    margin-top: 50px;
    gap: 50px;
`
export const AboutRightSideDiv = styled(AboutLeftSideDiv)`
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`
export const BasicInfoDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 300px;
    align-items: center;
`
export const InfoSectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
`
export const AboutCardDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    padding: 10px;
    width: 1000px;
    height: fit-content;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`