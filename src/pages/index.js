import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"

export default () => (
  <Layout>
    <h1 style={{ color: "green", textTransform: "uppercase" }}>
      Hello from Gatsby!
    </h1>
    <h1>Hello Word!</h1>
    <h1>Hello People!</h1>
    <ExampleButton>Click Me</ExampleButton>
  </Layout>
)
