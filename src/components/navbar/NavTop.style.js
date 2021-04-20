import styled from 'styled-components'

const NavTop = styled.nav`
    min-width: 1440px;
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
            .working-time {
                color: #fff;
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

`

export default NavTop;