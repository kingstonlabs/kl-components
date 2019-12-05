import React from "react"
import {shallow} from "enzyme"

import PageDownControl from "./PageDownControl"
import scrollToElement from "../../utils/PageScroller"


jest.mock("../../utils/PageScroller")

beforeEach(() => {
  scrollToElement.mockClear()
})


test("PageDownControl allocates itself an id if pageDownHash is not specified", () => {
  let mockClickEvent = jest.fn()
  let mockElement = "mock-element"

  mockClickEvent.preventDefault = jest.fn()

  document.getElementById = jest.fn()
  document.getElementById.mockReturnValue(mockElement)

  const pageDownControl = shallow(
    <PageDownControl/>
  )

  expect(pageDownControl.hasClass("page-down-control")).toEqual(true)
  let pageDownId = pageDownControl.prop("id")
  expect(pageDownId).toMatch(/^pd-\d+$/)

  let pageDownControlButton = pageDownControl.find(".page-down-control__button")
  pageDownControlButton.simulate("click", mockClickEvent)
  expect(mockClickEvent.preventDefault).toHaveBeenCalledTimes(1)
  expect(document.getElementById).toHaveBeenCalledTimes(1)
  expect(document.getElementById).toBeCalledWith(pageDownId)
  expect(scrollToElement).toHaveBeenCalledTimes(1)
  expect(scrollToElement).toBeCalledWith(mockElement)
})


test("PageDownControl scrolls to specified page down hash", () => {
  let mockElementId = "mock-element-id"
  let mockElement = "mock-element"
  let mockClickEvent = jest.fn()

  mockClickEvent.preventDefault = jest.fn()

  document.getElementById = jest.fn()
  document.getElementById.mockReturnValue(mockElement)

  const pageDownControl = shallow(
    <PageDownControl pageDownHash={mockElementId}/>
  )

  expect(pageDownControl.hasClass("page-down-control")).toEqual(true)
  expect(pageDownControl.prop("id")).toMatch(/^pd-\d+$/)
  expect(document.getElementById).toHaveBeenCalledTimes(0)

  let pageDownControlButton = pageDownControl.find(".page-down-control__button")

  pageDownControlButton.simulate("click", mockClickEvent)
  expect(mockClickEvent.preventDefault).toHaveBeenCalledTimes(1)
  expect(document.getElementById).toHaveBeenCalledTimes(1)
  expect(document.getElementById).toBeCalledWith(mockElementId)
  expect(scrollToElement).toHaveBeenCalledTimes(1)
  expect(scrollToElement).toBeCalledWith(mockElement)
})
