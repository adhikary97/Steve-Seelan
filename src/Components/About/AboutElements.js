import styled from "styled-components";

const Profile = styled.img`
    width: auto;
    height: 550px;
    margin: 15px;
    border-radius: 5%;    

    @media (max-width: 968px) {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: auto;
        max-width: 225px;
    }
`;

const ProfileContainer = styled.div`
    z-index: 2;
    padding: 0px 0px;
    border-radius: 5%;
    //padding: 0 0 60px;
    margin: 0 auto 0;
    max-width: 500px;
    //justify-content: space-between;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.06);

    @media (max-width: 968px) {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: auto;
        max-width: 250px;
        font-size: .9rem;
    }
`;

const AboutSection = styled.div`
    display: flex;
    /*-webkit-box-pack: center;*/
    justify-content: center;
    /*-webkit-box-align: center;*/
    max-width: 868px;
    flex-direction: row;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0px;
    margin: 225px auto 55px;

    @media (max-width: 968px) {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        font-size: .9rem;
    } 
`;

const getWidthString = (span) => {
    if(!span) return;

    let width = span / 12 * 100;
    return `width: ${width}%;`;
}

const getMarginString = (span) => {
    if(!span) return;

    let margin = span / 15 * 10;
    return `margin-top: ${margin}%;`;
}

const AboutContainer = styled.div`
    z-index: 1;
    padding: 0px 30px 25px;
    
    border-radius: 10%;
    //display: flex;
    //justify-content: space-between;
    align-items: left;
    //flex-wrap: wrap;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.06);

    @media only screen and (max-width: 868px) {
        ${getWidthString(12)}
        ${getMarginString(2)}
        display: flex;
        flex-direction: column;
    } 
`;

const AboutTitle = styled.div`
    font-family: 'Inconsolata', monospace;
    color: #E3535B; //7C8B87 EED5A5
    font-size: 1.75rem;
    padding: 105px 20px 25px;
`;

const AboutDescripton = styled.div`
    font-family: 'Inconsolata', monospace;
    color: #FAE9FF; //7C8B87 EED5A5
    font-size: 1.15rem;
    font-weight: 300;
    padding: 15px 20px 25px 20px;

    @media (max-width: 968px) {
        font-size: .9rem;
    }
`;

const Skills = styled.ul`
    padding: 0px 50px 5px 45px;
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    color: #FAE9FF; //7C8B87 EED5A5
    font-size: .95rem;
    font-weight: 300;
`;

const SkillsList = styled.li`
    font-family: 'Inconsolata', monospace;
    padding: 10px 0px 0px 5px;
`;



export {
    AboutSection,
    AboutContainer,
    AboutTitle,
    AboutDescripton,
    Skills,
    SkillsList,
    ProfileContainer,
    Profile
}