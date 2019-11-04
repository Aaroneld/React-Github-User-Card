import React from "react";
import styled from "styled-components";


const FindUser = (props) => {

    const FindUserSection = styled.section`

        margin: 2% 5%;
        background: #394e52;
        font-family: 'Roboto', sans-serif;

        form {

            padding: 3%;
            display: flex;
            flex-flow: column;
            align-items: center;
            

            input {

                max-width: 50%;
                margin: 2%;
                padding: 1% 5%;
                outline: none;
                font-weight: bold;
            }

            button {

                padding: 1% 5%;
                border-radius: 10px;
                outline: none;
                border: none;
                background: #33ebff
                font-weight: bold;

                &:hover {

                    background: #ffb433;
                }
            }
        }
    `;

    return (
        <FindUserSection onSubmit={props.submit}>
            <form>
                <input 
                placeholder="...Search for User"
                type="text"
                />
                <button type="submit">Search</button>
            </form>
        </FindUserSection>
    )
}

export default FindUser;