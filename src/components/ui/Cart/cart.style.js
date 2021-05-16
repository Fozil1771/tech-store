import styled from 'styled-components'

export const CartSection = styled.section`

    margin-bottom: 2rem;

    .section-header {
        margin-top: 2rem;

        &-title {
            margin: 2rem 0;
            font-size: 2rem;
            font-weight: 500;
        }
    }

    .cart-content {

        display: flex;
        margin: 0 -1rem;
        align-items: flex-start;

        


        &-items {
            margin: 0 1rem;
            overflow-x:auto;
            overflow-y:none;
            table {
                border-collapse: collapse;
                width: 100%;
                

    



                tr {   
                    border-bottom: 1px solid #dddddd;
                    width: 100% !important;

                    th {
                        padding-bottom: 5px;
                        padding: 0 2rem;
                        white-space: nowrap;
                    }   
                }

                th {
                    text-align: left;
                    
                }

                tbody {
                    tr {
                        padding: 1rem 0;
                        
                    }

                    td {
                        margin: 0 2rem;
                        padding: 0 2rem;

                       

                        .product-price {
                            white-space: nowrap;
                        }
                        
                    }
                    
                    .table-product {
                        display: flex;
                        /* align-items: center; */

                        @media screen and (max-width: 1024px) {
                            display:flex;
                            flex-direction:column;
                            
                        }

                        &__info {
                            h4 {
                                margin: 1rem 0;
                            }

                        }
                    }

                    .table-product-counter {
                        display: flex;
                        align-items: center;
                        background: #EBEBEB;
                        border-radius: 6px;

                        .counter {
                            display: flex;
                            flex-direction: column;
                            padding: .8rem .5rem;

                            &-btn {
                                border: none;
                                background-color: transparent;
                                color: #8C8C8C;
                            }
                        }

                        


                        span {
                            
                            padding: .5rem;
                            font-size: 1.2rem;
                            text-align: center;
                            width: 3rem;
                            border: none;
                            background: transparent;

                            &:focus {
                                outline: none;
                                border: none;
                            }
                        }
                    }
                }
            }
        }

        &-summary {
            max-width: 411px;
            width: 100%;
            margin: 0 1rem;
            background: #F5F7FF;
            padding: 2rem;
           

            .summary-title {
                font-size: 1.5rem;
                font-weight: 500;
                color: #333;
                margin-bottom: 1rem;
            }

            .dropdown {

                &-label {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                    cursor: pointer;

                   
                    
                    h4 {
                        color: #333;
                        font-size: 18px;
                        font-weight: 400;
                    }
                }

                &-body {
                    h5 {
                        
                        color: #666666;
                        font-size: 14px;
                        font-weight: 300;
                        margin-bottom: .75rem;
                    }
                    .input-block {
                        margin-bottom: 1rem;
                        label {
                            color: #222;
                            font-weight: 700;
                            margin-bottom: .5rem;
                        }
                        input {
                            padding: 1rem;
                            border: 1px solid #8C8C8C;
                            border-radius: 4px;
                            background: #fff;

                            &:focus {
                                border-color: #66afe9;
                                outline: 0;
                                -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
                                        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
                            }
                        }

                        .input-checkbox {
                            display: flex;
                            align-items: baseline;
                            margin: .5rem 0;
                            
                            
                            p {
                                font-size: 1rem;
                                font-weight: 400;
                                color: #333;
                                margin-left: .5rem;
                            }
                        }
                    }

                    button {
                        width: 100%;
                        margin: .5rem 0;
                    }
                    .btn-discount {
                        padding: 1rem 2.4rem;
                    }
                }

                .total-price {

                    &__block {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 1rem;
                    }

                    .sub-text {
                        color: #8C8C8C;
                        font-size: 14px;
                        line-height: 1.25rem;
                        margin: 1rem 0;
                    }
                }
            }
        }

        @media screen and (max-width: 1366px) {
            & {
                flex-direction: column;

                &-summary {
                    margin-top: 2rem;
                    max-width: 100%;
                    width: 100%;

                    .input-block {
                        max-width: 100%;
                    }

                    .dropdown-body button {
                        width: fit-content;
                        margin-right: 1rem;
                    }
                }
            }
        }
    }
`