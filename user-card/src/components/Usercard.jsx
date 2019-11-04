import React from 'react';
import styled from 'styled-components';


const UserCard = (props) => {

    const UserSection = styled.section`

        margin: 2% 5%;
        border 2px solid transparent;
        background: #394e52;
        color: white; 
        font-family: 'Roboto', sans-serif;

        h1 {

            font-size: 150%;
            font-weight: bold
            margin: 4% auto 0 auto;
        }

        .flex-section {

            display: flex;
            color: black;

            .image-name {

                background: #ffb433;
                flex-basis: 33%;
                padding: 2%;
                margin: 7% 3% 10% 3%;
                line-height: 130%;

                img {

                    max-width: 60%;
                }

                h2 {

                    font-size: 75%;
                }
            }

            .bio-links {

                background: white;
                color: black;
                flex-basis: 66%;
                padding: 2%;
                margin: 7% 3% 10% 3%;
                display: flex;
                flex-flow: column;
                justify-content: center;
                line-height: 130%;

                p:first-child {

                    text-align: left;
                    margin-bottom: 8%;
                }

                p {

                    a {

                        display: inline-block;
                        text-decoration: none;
                        color: black;
                        background: #33ebff
                        padding: 0 3% 1% 3%;
                        margin: -4% 0 2% .5%;
                        border-radius: 8px;
                        font-weight: bold;

                        &:hover {

                            background: #ffb433;
                        }
                    }

                    p {

                        display: inline;
                        border-radius: 50%;
                        padding: 1% 1%;
                        margin-left: 1%;
                        background: #ff5a30;
                        color: white;
                    }
                }
            }

        }
        
    `;

    return (
        <UserSection>

            <h1>GitHub User</h1>
            <section className="flex-section">
                <div className="image-name">
                    <img src={props.user.avatar_url}/>
                    <h2>{`Username: ${props.user.login}`}</h2>
                    <h2>{`Name: ${props.user.name}`}</h2>
                </div>
                <div className="bio-links"> 
                    <p>{`Bio: ${props.user.bio}`}</p>
                    <p>Number of <a href={props.user.repos_url}>repos</a>:<p>{`${props.user.public_repos}`}</p></p>
                    <p>Link to <a href={props.user.html_url}>site</a></p>
                </div>
            </section>
        </UserSection>
    );
}

export default UserCard;