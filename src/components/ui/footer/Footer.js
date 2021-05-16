import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.section`
    padding: 2rem;
    background-color: #020203;
    margin-top: auto;
    
    .footer {
        max-width: 1680px;
        width: 100%;
        margin: 0 auto;
        color: #fff;
        


        &-head {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            @media screen and (max-width: 571px) {
                align-items: flex-start;
                flex-direction: column;
            }

            &__content {

                .footer-subTitle {
                    font-size: 14px;
                    margin: .5rem 0;
                    font-weight: lighter;
                }
            }

            &__input {

                input {
                    height: 3rem;
                    width: 20rem;
                    background-color: transparent;
                    color: #fff;
                    border: 1px solid #fff;
                    padding: 1rem;
                    margin: 0 2rem;

                    @media screen and (max-width: 571px) {
                        margin: 2rem 5px 1rem 0;
                        width: 100%;
                    }
                }
            }
        }

        .footer-copyright {
            padding-top: 2rem;
        }
    }
`

const Footer = () => {
    const styles = { width: '100%', margin: '1rem 0' }
    return (
        <FooterSection>
            <footer className="footer">
                <div className="footer-head">
                    <div className="footer-head__content">
                        <h2 className="footer-title">Sign Up To Our Newsletter.</h2>
                        <p className="footer-subTitle">Be the first to hear about the latest offers.</p>
                    </div>
                    <div className="footer-head__input">
                        <input type="text" placeholder="Your Email" />
                        <button className="btn-secondary">Subscribe</button>
                    </div>
                </div>

                <div className="footer-copyright">
                    <hr style={styles} />
                    <span>Developed by Fozil Zayniddinov</span>
                </div>
            </footer>
        </FooterSection>
    )
}

export default Footer;
