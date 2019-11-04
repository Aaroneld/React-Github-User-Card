import React from 'react';
import styled from 'styled-components';


const FollowerCard = (props) => {

    const FollowerSection = styled.section`

        margin: 2% 5% 4% 5%;
        font-family: 'Roboto', sans-serif;
        display: flex;
        background: white;
        
       

        .image-name {

            flex-basis: 33%;
            padding: 2%;
           
            margin: 2%;
            line-height: 130%;
            color: black;
            background: #ffb433;

            img {

                max-width: 60%;
            }

            h2 {

                font-size: 75%;
            }
        }

        .bio-links {

            flex-basis: 66%;
            padding: 2%;
            margin: 2%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            line-height: 130%;
            background: #33ebff;
            color: black;
            font-size: 110%;

            p:first-child {

                
                margin-bottom: 2%;
            }

            p {

                a {

                    display: inline-block;
                    text-decoration: none;
                    color: white;
                    background: #394e52; 
                    padding: 0 3% 1% 3%;
                    margin: -4% 0 .5% .5%;
                    border-radius: 8px;
                    font-weight: bold;

                    &:hover {

                        background: #ffb433;
                    }
                }
        }
        
    `;

    return (
        <FollowerSection>

            <div className="image-name">
                <img src={props.follower.avatar_url}/>
                <h2>{`Username: ${props.follower.login}`}</h2>
                <h2>{`Full Name: ${props.follower.name}`}</h2>
            </div>
            <div className="bio-links"> 
              
                <p>Link to <a href={props.follower.repos_url}>repos</a></p>
                <p>Link to <a href={props.follower.html_url}>site</a></p>
            </div>
        </FollowerSection>
    );
}

export default FollowerCard;