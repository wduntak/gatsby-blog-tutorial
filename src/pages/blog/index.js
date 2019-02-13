import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout2'

const Headline = styled.h1`
    display: inline-block;
    color: cornflowerblue;
`

export default ({data}) => (
    <Layout>
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <title>My Blog Posts Overview</title>
                <meta name="description" content="Free Web Tutorials"></meta>
                <meta name="keywords" content="Blog, Gatsby, React, JavaScript"></meta>
                <meta name="author" content="Wangdu D"></meta>
            </Helmet>
            <Headline>My Blog Posts</Headline>
            <br />
            {data.allMarkdownRemark.edges.map(({node}, index) => (
                <div key={node.id}>
                    <hr />
                    <Link to={node.fields.slug} style={{textDecoration: 'none'}}>
                        <h3>{node.frontmatter.title}</h3>
                    </Link>
                    <p><i>{node.frontmatter.date}</i></p>
                    <p>{node.excerpt}</p>
                </div>
            ))}
            <Link to="/">Go back to Home</Link>
        </div>
    </Layout>
)


export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
                }
                excerpt(pruneLength: 100)
                fields {
                    slug
                }
              }
            }
        }        
    }
`