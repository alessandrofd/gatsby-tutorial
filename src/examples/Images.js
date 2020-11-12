import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import img from "../images/image-4.jpeg"

const query = graphql`
  {
    fixed: file(relativePath: { eq: "image-3.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          src
        }
      }
    }
    fluid: file(relativePath: { eq: "image-4.jpeg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

const Images = () => {
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
      </article>
      <article className="single-image">
        <h3>fluid image</h3>
      </article>
    </section>
  )
}

export default Images
