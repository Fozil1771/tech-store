import styled from 'styled-components'


const NavContent = styled.div`
    min-width: 1440px;
    width: 100%;
    height: 3rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 10%;


    .nav-brand {
        margin: .1rem;
    }

    .nav-links{
        margin: 0 -.5rem;
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

    .nav-btns {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        &__item {
            margin: 0 1rem;
        }
    }

    
`

export default NavContent;