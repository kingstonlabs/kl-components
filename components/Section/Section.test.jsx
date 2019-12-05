import React from "react"
import {shallow} from "enzyme"

import Section from "./Section"


test("Section renders section with text", () => {
  const sectionText = "Example"
  const section = shallow(
    <Section>{sectionText}</Section>
  )

  expect(section.type()).toEqual("section")
  expect(section.hasClass("section")).toEqual(true)
  expect(section.text()).toEqual(sectionText)
})


test("Section modifier is added as section BEM class", () => {
  const section = shallow(
    <Section modifiers={["test"]}></Section>
  )

  expect(section.hasClass("section")).toEqual(true)
  expect(section.hasClass("section--test")).toEqual(true)
})


test("Section id property can be set", () => {
  const sectionId = "section-on-tests"
  const section = shallow(
    <Section id={sectionId}>A section</Section>
  )

  expect(section.prop("id")).toEqual(sectionId)
})
