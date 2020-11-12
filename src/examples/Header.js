import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      siteMetadata: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(query)
  // console.log("Header -> data", data)

  return (
    <div>
      {/* <h1>Title: {data.site.siteMetadata.title}</h1>
      <h1>Name: {data.site.siteMetadata.person.name}</h1> */}
      <h1>Title: {title}</h1>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default Header
