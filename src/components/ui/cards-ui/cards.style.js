import styled from 'styled-components'

export const ProdCard = styled.div`
    padding: 1rem;

    .card-block-img {
        position: relative;
        height: 10rem;
        width: 10rem;
        padding-top: 1.5rem;
        margin: 0 auto;

        img {
            width: 100%;
            height: 100%;
        }

        &-status {
            position:absolute;
            top: 1%;
            left: -10%;
            font-size: 12px;

            .instock {
                color: #78A962;
            }
            .outstock {
                color: #C94D3F;
            }

            .instock, .outstock {
                display: flex;
                
                img {
                width: 12px;
                height: 12px;
                margin-right: 4px;
                }
            }
        }
    }
    .card-block-reviews {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        color: #8C8C8C;
        margin-top: 10px;

        &-stars {
            display: flex;
        }
    }

    .card-block-title {
        color: #333;
        margin: .8rem 0;
        font-weight: 500;
        line-height: 20px;
    }

    .card-block-priceOld {
        color: #666666;
        text-decoration: line-through;
        font-size: 14px;
    }
    .card-block-priceNew {
        color: #333333;
        font-size: 18px;
        font-weight: bold;
        margin-top: 5px;
    }

`
