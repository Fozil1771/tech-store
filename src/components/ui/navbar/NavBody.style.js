import styled from 'styled-components'


const NavContent = styled.div`
    max-width: 1680px;
    width: 100%;
    height: 3rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 10%;
    position: relative;

    

    .nav-brand {
        margin: .1rem;
    }

    .nav-links{
        margin: 0 -.5rem;
        margin-right: auto;
        &__content {
            display: flex;
            align-items: center;
            /* justify-content: space-between; */
            margin: 0 1rem;

            a {
                white-space: nowrap;
                color: #020202;
                font-weight: 600;
                margin: 0 .5rem;
                
            }
        }
    }

    .nav-search {
        width: 100%;
        margin: 0 2rem;
        position: relative;

        input {
            width: 100%;
            height: 3rem;
            border: none;
            border-radius: 30px;
            background: #EBEBEB;
            color: #8C8C8C;
            font-size: 14px;
            margin: 0 1rem;
            padding: .5rem 1.5rem;

            &:focus {
                outline: none;
            }
        }

    }

    .menu-dot {
        border: none;
        background: transparent;
        color: #333;
        font-size: 18px;
        display: block;

        @media screen and (min-width: 411px) {
            display: none;
        }
    }

    .nav-btns {
        display: flex;
        align-items: center;
        justify-content: space-between;

        
        
        &__item {
            margin: 0 1rem;
        }

        .basket {
            position: relative;
            .badge {
                position: absolute;
                width: 1rem;
                height: 1rem;
                top: -5px;
                right: -5px;
                background: #0156FF;
                border-radius: 50%;
                color: #fff;
                text-align: center;
                padding: 2px 0;
                font-size: 12px;
            }
        }

        .profile-img {
            font-size: 24px; 
            a {
                color: #333;
            }
        }

        @media screen and (max-width: 411px) {
            & {
                display: none;
                position: absolute;
                top: 40px;
                right: 15%;
                flex-direction: column;
                z-index: 2;
                background: #fff;
                padding: .2rem;
                border-top: 1px solid #666;

                &__item {
                    margin: .5rem 1rem;
                }
            }
        }
    }

    .active {
            display: flex !important;
    }

    
`

export default NavContent;