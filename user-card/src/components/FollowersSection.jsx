import React from 'react';
import styled from 'styled-components';
import FollowerCard from './FollowerCard';


const FollowersSection = (props) => {

    const FollowersSection= styled.section`

        margin: 2% 5%;
        border: 1px solid transparent;
        background: #394e52;
        font-family: 'Roboto', sans-serif;

        h1 {

            font-size: 150%;
            font-weight: bold
            margin: 2% auto;
            color: white;
        }
    `;

    return (
        <FollowersSection>
            <h1>Followers</h1>
            {props.followers !== [] && props.followers.map(follower => {
               return <FollowerCard follower={follower}/>
            })}

        </FollowersSection>
    );
}

export default FollowersSection; 