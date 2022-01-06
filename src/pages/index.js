import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
 
const IndexPage = ({ data }) => {
  console.log(data)
  return (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiBooks.nodes.map((node) => (
    <li key={node.strapiId}>
      <h2>
        <Link to={`/${node.strapiId}`}>{node.title}</Link>
      </h2>
      <p>{node.author}</p>
    </li>
))}
  </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)}
 
export default IndexPage
 
export const pageQuery = graphql`
  query IndexQuery {
    allStrapiBooks {
      nodes {
        author
        title
        id
        strapiId
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
