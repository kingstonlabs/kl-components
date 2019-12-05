import React from "react"
import PropTypes from "prop-types"
import jsonp from "jsonp"
import { subscribeFormUrl } from "../../globals"

import "./SubscribeForm.scss"


class SubscribeForm extends React.Component {
  constructor(props) {
    super(props)
    this.url = props.url || subscribeFormUrl
    this.honeypotName = "b_b77b11c2932dae0acd8d12e12_ecd82a59c7"
    this.state = {
      status: null,
      statusMessage: "",
      data: {
        EMAIL: "",
        [this.honeypotName]: ""
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.data[this.honeypotName] !== "") {
      // If someone fills in the honeypot, act as if it submitted successfully
      this.setState({status: "success", statusMessage: "Thanks for subscribing!"})
    } else {
      this.subscribe()
    }
  }

  serialize(data) {
    // Serialize the form data into a query string
    return Object.keys(data).map(key => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    }).join("&")
  }

  subscribe() {
    let { data } = this.state
    let url = this.url.replace("/post?u=", "/post-json?u=") + "&" + this.serialize(data)

    this.setState(
      {
        status: "sending",
        statusMessage: ""
      },
      () =>
        jsonp(
          url,
          {
            param: "c"
          },
          (err, data) => {
            if (err) {
              this.setState({
                status: "error",
                statusMessage: err
              })
            } else if (data.result !== "success") {
              this.setState({
                status: "error",
                statusMessage: data.msg
              })
            } else {
              this.setState({
                status: "success",
                statusMessage: data.msg
              })
            }
          }
        )
    )
  }

  handleChange = e => {
    this.setState({data: {...this.state.data, [e.target.name]: e.target.value}})
  }

  renderFormStatus() {
    const {stacked} = this.props
    let rawMessage = this.state.statusMessage
    let re = /((\d+) - )?(.*)/
    let matches = re.exec(rawMessage)
    let message = matches.pop()

    return (
      <div
        className={`form-status form-status--${this.state.status} form-status--${stacked ? "stacked" : "horizontal"}`}
        dangerouslySetInnerHTML={{__html: message}}
      >
      </div>
    )
  }

  renderForm() {
    const {
      stacked,
      centred,
      caption,
      ...props
    } = this.props

    return (
      <form
        className={`subscribe-form__form form${centred ? " form--centred" : "form--full"}`}
        action={this.url}
        method="post"
        target="_blank"
        onSubmit={this.handleSubmit}
        {...props}
      >
        <div className={`form__group form__group--${stacked ? "stacked" : "horizontal"}`}>
          <div className="field">
            <label className="field__label" htmlFor="mce-EMAIL">Email</label>
            <input
              className="field__input"
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              onChange={this.handleChange}
              value={this.state.data.EMAIL}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div hidden>
            <label>Don’t fill this out</label>
            <input name={this.honeypotName} onChange={this.handleChange} value={this.state.data[this.honeypotName]}/>
          </div>
          <div className="field">
            <input
              className="button"
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              value="Subscribe"
            />
          </div>
        </div>
        {this.state.status === "error" ? this.renderFormStatus() : ""}
        {caption ? <p className="subscribe-form__caption">{caption}</p> : ""}
      </form>
    )
  }

  renderSuccess() {
    return (
      <div className="subscribe-form__success">
        {this.renderFormStatus()}
      </div>
    )
  }

  render() {
    return (
      <div className="subscribe-form">
        {this.state.status === "success" ? this.renderSuccess() : this.renderForm()}
      </div>
    )
  }
}


SubscribeForm.propTypes = {
  url: PropTypes.string,
  stacked: PropTypes.bool,
  centred: PropTypes.bool,
  caption: PropTypes.string,
}


export default SubscribeForm
