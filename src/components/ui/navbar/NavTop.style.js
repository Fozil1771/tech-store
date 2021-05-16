import styled from 'styled-components'

const NavTop = styled.nav`
    
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #020202;
    color: #fff;
    padding: 0 10%;


    .info-time {
        font-size: 12px;
        font-weight: 500;
        span {
            color: #8C8C8C;
            
        }
        .working-time {
                color: #fff;
        }

    
        @media screen and (max-width: 1024px) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .working-time {
                margin-top: .2rem;
            }
        }
    }

    .info-address, .info-phone {
        font-size: 12px;
        font-weight: 500;
    }

    .info-address {
        color: #8C8C8C;
        margin-left: -.5rem;
        .contact-us {
            color: #fff;
            text-decoration: underline;
            margin-left: .5rem;
        }

        @media screen and (max-width: 1024px) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            span {
                margin-bottom: .2rem;
            }
        }
    }


    .contact-box {
        display: flex;
        align-items: center;

        .info-icons {
            margin-left: 1rem;
            margin-right: -.5rem;

             svg{
                margin-right: .5rem;
            }
        }
    }

    @media screen and (max-width: 571px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        padding-top: .5rem;

        .contact-box {
            margin: .4rem 0;
        }

        .info-address {
            margin: 0;
        }
    }

`

export default NavTop;