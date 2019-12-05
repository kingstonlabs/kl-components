import React from "react"
import {shallow} from "enzyme"

import Paragraph from "./Paragraph"


test("Paragraph renders paragraph with text", () => {
  const paragraphText = "Example"
  const paragraph = shallow(
    <Paragraph>{paragraphText}</Paragraph>
  )

  expect(paragraph.type()).toEqual("p")
  expect(paragraph.hasClass("paragraph")).toEqual(true)
  expect(paragraph.text()).toEqual(paragraphText)
})


test("Paragraph modifier is added as paragraph BEM class", () => {
  const paragraph = shallow(
    <Paragraph modifiers={["test"]}>A paragraph</Paragraph>
  )

  expect(paragraph.hasClass("paragraph")).toEqual(true)
  expect(paragraph.hasClass("paragraph--test")).toEqual(true)
})
