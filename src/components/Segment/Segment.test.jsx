import React from "react"
import {shallow} from "enzyme"

import Segment from "./Segment"


test("Segment renders text in segment content", () => {
  const segmentText = "Segment text"
  const segment = shallow(
    <Segment>{segmentText}</Segment>
  )

  expect(segment.hasClass("segment")).toEqual(true)

  let segmentContent = segment.find(".segment__content")
  expect(segmentContent.exists()).toEqual(true)
  expect(segmentContent.text()).toEqual(segmentText)
})


test("Segment modifier is added as segment BEM class", () => {
  const segment = shallow(
    <Segment modifiers={["test"]}></Segment>
  )

  expect(segment.hasClass("segment")).toEqual(true)
  expect(segment.hasClass("segment--test")).toEqual(true)
})


test("Segment content modifier is added as segment__content BEM class", () => {
  const segment = shallow(
    <Segment contentModifiers={["test"]}>Content</Segment>
  )

  let segmentContent = segment.find(".segment__content")
  expect(segmentContent.hasClass("segment__content--test")).toEqual(true)
})
