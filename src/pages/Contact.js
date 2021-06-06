import React from 'react'
import styled from 'styled-components'

import "./Contact.scss"

const ContactPage = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    margin: 0px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #003a5d;
    height: 100%;
`;

const Area = styled.div`
    display: flex;
    background: white;
    padding: 40px 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    position: relative;
    width: 700px;
`;

const ContactInfo = styled.div`
    position: relative;
    width: 230px;
    flex: 0 0 230px;
    background: #002a43;
    color: white;
    margin-left: calc(-230px / 2 - 30px);
    padding: 25px;
    box-shadow: 10px 10px black;
`;

const FormArea = styled.div`
    width: calc(100% - 230px / 2 - 55px);
    flex: 0 0 calc(100% - 230px / 2 - 55px);
    padding: 25px 30px;
    padding-bottom: 0px;
`;

const Title = styled.h3`
    font-size: 24px;
    margin: 0px;
    font-weight: 400;
    margin-bottom: 30px;
    padding: 0 15px;
    color: #002a43;
`;

function Contact() {
    return (
        <ContactPage>
            <Area>
                <ContactInfo>
                    <h1>Contact Information</h1>
                </ContactInfo>
                <FormArea>
                    <Title>Email me!</Title>
                    <div class="form_field">
                        <div class="input_group w_50">
                            <input type="text" class="input" required />
                            <label class="placeholder">First Name</label>
                        </div>

                        <div class="input_group w_50">
                            <input type="text" class="input" required />
                            <label class="placeholder">Last Name</label>
                        </div>

                        <div class="input_group w_50">
                            <input type="text" class="input" required />
                            <label class="placeholder">Email Address</label>
                        </div>

                        <div class="input_group w_50">
                            <input type="tel" class="input" required />
                            <label class="placeholder">Mobile Number</label>
                        </div>

                        <div class="input_group w_100">
                            <textarea class="input input_textarea " rows="6" required></textarea>
                            <label class="placeholder textarea">Write your message here...</label>
                        </div>

                        <div class="input_group">
                            <input type="submit" class="btn" value="Send" />
                        </div>
                    </div>
                </FormArea>
            </Area>          
        </ContactPage>
    )
}

export default Contact
