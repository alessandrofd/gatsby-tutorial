import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import img from "../images/image-4.jpeg"

const query = graphql`
  {
    fixed: file(relativePath: { eq: "image-3.jpeg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-4.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    example: file(relativePath: { eq: "image-4.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(query)

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" alt="example" />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fluid image</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <div className="small">
          <Image fluid={data.fluid.childImageSharp.fluid} />
          <h2>Content</h2>
        </div>
        <Image fluid={data.example.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
