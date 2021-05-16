
import styled from 'styled-components'

export const ServiceSection = styled.section`
max-width: 1140px;
width: 100%;
margin: 2rem auto;
padding: 4rem 0;
margin-top: auto;
background: #F5F7FF;

&::after {
    display: table;
    clear: both;
    content: '';
}

.service-card {
    width: calc((100% - 20px * 2) / 3);
    float: left;
    text-align: center;
    margin-right: 20px;

    @media screen and (max-width: 571px) {
        width: 100%;
        float: none;
        padding: 2rem;
    }

    &__img {
        margin-bottom: 1rem;
    }

    &__title {
        color: #222;
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    &__text {
        font-size: 14px;
    }

    &:last-child {
        margin-right: 0;
        float: right;
    }
}

`