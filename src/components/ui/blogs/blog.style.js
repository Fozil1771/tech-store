import styled from 'styled-components'

export const BlogContent = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`

export const BlogCard = styled.div`
    padding: 1rem;
    text-align: center;
    width: 16rem;

    .blog-img {
        position: relative;
        height: 10rem;
        width: 14rem;
        margin: 0 auto; 

        img {
            width: 100%;
            height: 100%;
        }
    }
    .blog-body {
        font-size: 14px;
        color: #8C8C8C;
        padding: 1rem;
        
    }
    .blog-date {
        font-size: 12px;
        color: #dddddd;
    }
`