import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
 
const BookTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiBooks.title}</h1>
    <p>{data.strapiBooks.author}</p>
  </Layout>
)
 
export default BookTemplate
 
export const query = graphql`
  query BookTemplate($id: Int!) {
    strapiBooks(strapiId: { eq: $id }) {
      title
      author
    }
  }
`