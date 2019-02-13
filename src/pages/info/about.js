import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../../components/layout2'

import gatsbyAstronaught from '../../images/gatsby-astronaut.png'

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0, auto, 12px, auto;
`
const Avatar = styled.img`
    flex: 0 0 96px;
    width: 96px;
    margin: 0;
`
const Description = styled.div`
    flex: 1;
    margin-left: 18px;
    padding: 12px;
`

const Username = styled.h2`
    margin: 0 0 12px 0;
`

const Excerpt = styled.p`
    margin: 0;
`

const User = props => (
    <UserWrapper>
        <Avatar src={props.avatar}/>
        <Description>
            <Username>{props.username}</Username>
            <Excerpt>{props.excerpt}</Excerpt>
        </Description>
    </UserWrapper>
)

const AboutPage = ({data}) => (
    <Layout>
        <div>
            <h1>About Page</h1>
            <User 
                username={data.site.siteMetadata.author}
                avatar={gatsbyAstronaught}
                excerpt={data.site.siteMetadata.description}
            />
            <br />
            <Link to="/">Go back to Home</Link>
        </div>
    </Layout>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                author
                description
            }
        }
    }
`

export default AboutPage;