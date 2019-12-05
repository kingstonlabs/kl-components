import React from "react"
import {shallow} from "enzyme"

import Heading from "./Heading"


test("Heading renders an h1 with text", () => {
  const headingText = "Big Heading"
  const heading = shallow(
    <Heading>{headingText}</Heading>
  )

  expect(heading.type()).toEqual("h1")
  expect(heading.hasClass("heading")).toEqual(true)
  expect(heading.text()).toEqual(headingText)
})


test("Heading modifier is added as heading BEM class", () => {
  const heading = shallow(
    <Heading modifiers={["test"]}>Heading</Heading>
  )

  expect(heading.hasClass("heading")).toEqual(true)
  expect(heading.hasClass("heading--test")).toEqual(true)
})


test("Heading level 2 uses an h2 tag", () => {
  const heading = shallow(
    <Heading level={2}>Heading</Heading>
  )

  expect(heading.type()).toEqual("h2")
})


test("Heading level 6 uses an h6 tag", () => {
  const heading = shallow(
    <Heading level={6}>Heading</Heading>
  )

  expect(heading.type()).toEqual("h6")
})


test("Heading level 0 uses a span tag", () => {
  const heading = shallow(
    <Heading level={0}>Non-semantic Heading</Heading>
  )

  expect(heading.type()).toEqual("span")
})
