import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page.</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam natus
          nam nemo commodi nobis fuga sit iure adipisci officiis deleniti. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Quia, sit. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Rerum, facilis?
        </p>
      </div>
    </Layout>
  )
}

export default blog
