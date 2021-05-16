import styled from 'styled-components';

export const DetailsProduct = styled.section`

    overflow: hidden;

    .page-nav {
        display: flex;
        justify-content: space-between;
        
        padding: 1rem 0;

        

        &__tab, &__buy {   
           
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 -10px;
        }
        &__tab {

            .tab-links {
                margin: 0 10px;
                color: #666666;
                cursor: pointer;
            }

            .active {
                color: #222;
                position: relative;
                font-weight: bold;

                &::before {
                    content: "";
                    width: 100%;
                    bottom: -5px;
                    left: 0;
                    position: absolute;
                    height: 2px;
                    background: #0156FF;
                }
            }

            @media screen and (max-width: 768px) {
                & {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    .tab-links {
                        font-size: 14px;
                    }
                }
            }
        }

        &__buy {
            .page-nav__counter {
                margin: 0 10px;
                @media screen and (max-width: 768px) {
                    & {
                        margin: .4rem 0;
                        
                    }
                }
            }

            .page-nav__add {
                
                button, a {
                    margin: 0 10px;

                    @media screen and (max-width: 768px) {
                        & {
                            margin: 0;
                            margin-bottom: 1rem;
                            
                        }
                    }
                }
            }

            @media screen and (max-width: 768px) {
                & {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
            }
        }
    }

    .product-body {
        width: 100%;
        position: relative;
        
        .product-info {
            display: flex;
            flex-wrap: wrap;
            @media screen and (max-width: 1256px) {
                    flex-direction: column-reverse;
                }

            &__content, &__gallery {
                margin: 0 .5rem;
                width: calc(50% - 1rem);
                position: relative;

                @media screen and (max-width: 1256px) {
                    width: 100%;
                    margin: 0 ;
                }
                
                
            }

            &__content {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
               
                .description {
                    padding: 4rem 10%;

                    @media screen and (max-width: 1256px) {
                        padding: 0;
                    padding-bottom: 2rem;
                }
                    &-title {
                        margin-top: 2rem;
                        font-size: 2rem !important;
                        font-weight: 500;
                    }

                    &-review {
                        color: #0156FF;
                        margin: 1rem 0;
                    }

                    &-text, &-detail {
                        line-height: 30px;
                        letter-spacing: 1px;
                    }
                    &-specs {
                        background: #fff;
                        width: 30%;

                        div {
                            margin: 2rem 0;
                            display: flex;
                            align-items: center;

                            p {
                                margin-right: auto;
                            }
                        }
                    }

                    .product-colors {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 10rem;
                        padding: 2rem 0;
                        span {
                            position: relative;
                            ::before {
                                content: "";
                                position: absolute;
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                            }
                        }

                        .red {
                            ::before {
                               
                                background: red;
                            }
                        }
                        .white {
                            ::before {
                            
            
                                background: #ddd;
                            }
                        }
                        .black {
                            ::before {
                                
                                background: #333;
                            }
                        }

                        .active {
                            ::before {
                                border: 3px solid gray;
                                padding: -3px;
                            }
                        }
                    }
                    .contact-us {
                            padding-top: 2rem;
                    }
                }
                .more-info {
                        padding-bottom: 2rem;
                    }
            }

            &__gallery {
                padding: 4rem 10%;
                background: #fff;

                @media screen and (max-width: 1440px) {
                    padding: 0;
                    padding-top: 2rem;
                }
                
                .product-image {
                    height: 30rem;
                    width: 30rem !important;

                    @media screen and (max-width: 1440px) {
                        height: auto;
                        width: 100% !important;
                    }
                    
                    img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        
                    }

                    .magnifier {   
                        div {
                            
                            img {
                             
                                height: 30rem;
                                width: 30rem !important;
                                
                            }
                        }

                        &:hover {
                            div {
                            
                            img {
                             
                               visibility: visible !important;
                                
                            }
                        } 
                        }
                    }
                }
            }
        }
    }

`

export const DetailsBody = styled.section`

    .product-about {
        padding: 5% 10%;
        width: 100%;
        height: 40rem;
        position: relative;

        &__img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;

                img {
                width: 100%;
                height: 100%;
                object-fit: cover;

            }
        }

        &__slider {
            padding: 1rem 5%;
            color: #fff;
            width: 100%;
            .slick-slider {
                width: 35%;

                @media screen and (max-width: 768px) {
                    & {
                        width: 75%;
                        
                    }
                }
                .slick-arrow{
                    display: none !important;
                }

                .slick-dots {
                    
                    bottom: -50px;
                    left: -50px;
                    width: fit-content;

                    button::before {
                        font-size: .8rem;
                        color: #eee;
                    }

                    li.slick-active {
                        button::before {
                            color: #fff !important;
                        }
                    }
                }

                .slider-content {
               
                    h3 {
                        font-size: 2.5rem;
                        font-weight: 500;
                        margin-bottom: 2rem;
                    }
                    p {
                        line-height: 26px;
                        font-size: 1.25rem;
                        font-weight: 200;
                        margin-bottom: 2rem;
                    }
                }
            }
        }
    }

    .product-qa {
        width: 100%;
        height: 25rem;
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        &__img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;

                img {
                width: 100%;
                height: 100%; 
                object-fit: cover;
            }
        }

        .qa-link {
            margin-right: 25%;

            &-block {
                margin-bottom: 2rem;
                padding: 1rem;
                background:#fff;
                
                border: 1px solid #CCCCCC;
                border-radius: 6px;
                width: 20rem;

                a {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #222;

                    svg {
                        color: #0156FF;
                    }
                }
            }
        }
    }

    .product-features {
        background: rgba(36, 37, 40, 1.0);
        background: -webkit-radial-gradient(center, rgba(36, 37, 40, 1.0), rgba(4, 4, 4, 1.0));
        background: -moz-radial-gradient(center, rgba(36, 37, 40, 1.0), rgba(4, 4, 4, 1.0));
        background: radial-gradient(ellipse at center, rgba(36, 37, 40, 1.0), rgba(4, 4, 4, 1.0));
        height: 40rem;
        background-size: cover;

        @media screen and (max-width: 380px) {
            height: 110rem;
        }

        @media screen and (min-width: 381px) and (max-width: 768px) {
            height: 80rem;
        }
        .wrapper {
            max-width: 1140px;
            width:100%;
            margin: 0 auto;
            padding: 5% 0;
            height: 100%;

            @media screen and (max-width: 768px) {
                padding: 10% 5rem;
            }

            .product-features__content {
                text-align: center;
                color: #fff;
                margin-bottom: 4rem;

                h4 {
                    font-size: 2.4rem;
                    font-weight: 500;
                    margin-bottom: 2rem;
                }

                p {
                    margin: 0 auto;
                    width: 40%;
                    font-weight: 200;
                    line-height: 24px;
                    letter-spacing: 1px;

                    @media screen and (max-width: 768px) {
                        width: 100%;
                    }
                }
            }

            .product-features__cards {
               

               @media screen and (max-width: 768px) {
                    margin: 0;
                   
                }

                .feature-card {
                    width: calc(25% - 2rem);
                    float: left;
                    text-align: center;
                    margin: 0 1rem;

                    color: #fff;

                    @media screen and (max-width: 768px) {
                        width: 100%;

                        margin: 1rem 0;
                    }

                    .feature-text {
                        font-weight: 200;
                        margin-top: 1rem;
                    }
                }
            }
        }
    }
`