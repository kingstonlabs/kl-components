import PropTypes from "prop-types"
import React, {Component} from "react"

import Diagonal from "../Diagonal/Diagonal"
import Flourish from "../Flourish/Flourish"
import Heading from "../Heading/Heading"
import ImageBackground from "../ImageBackground/ImageBackground"

import "./ContactForm.scss"


const encode = (data) => {
  return Object.keys(
    data
  ).map(
    key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  ).join("&")
}


class ContactForm extends Component {
  /*
  * Renders a contact form
  */
  constructor(props) {
    super(props)
    const {
      honeypotName="company",
      subject="Enquiry"
    } = props

    this.honeypotName = honeypotName

    this.state = {
      status: "default",
      statusMessage: "",
      data: {
        name: "",
        email: "",
        message: "",
        subject: subject,
        website: "",
        [this.honeypotName]: ""
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handlePresubmit = this.handlePresubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({data: {...this.state.data, [e.target.name]: e.target.value}})
  }

  handlePresubmit() {
    this.setState({status: "error"})
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch(
      "",
      {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: encode({"form-name": "contact", ...this.state.data})
      }
    ).then(
      () => this.setState({
        status: "success",
        statusMessage: "Thank you for your enquiry, we will be in contact shortly"
      })
    ).catch(
      error => this.setState({
        status: "error",
        statusMessage: `Sorry, there was a problem with your form submission: ${error}`
      })
    )

  }

  serialize(data) {
    // Serialize the form data into a query string
    return Object.keys(data).map(key => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    }).join("&")
  }

  renderFormStatus() {
    return (
      <div className={`form-status form-status--${this.state.status}`}>
        {this.state.statusMessage}
      </div>
    )
  }

  renderSuccess() {
    return (
      <div className="contact-form__success">
        {this.renderFormStatus()}
      </div>
    )
  }

  renderForm() {
    return (
      <form
        className={`form form--full form--${this.state.status}`}
        name="contact"
        method="POST"
        target="_blank"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        netlify-honeypot="company"
      >
        <div className="field hidden">
          <input
            className="field__input"
            type="hidden"
            name="form-name"
            value="contact"
          />
          <input
            className="field__input"
            type="hidden"
            name="subject"
            onChange={this.handleChange}
            value={this.state.subject}
          />
        </div>
        <div className="field hidden">
          <input
            className="field__input"
            onChange={this.handleChange}
            value={this.state.data[this.honeypotName]}
          />
        </div>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            className="field__input"
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
            value={this.state.data.name}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            className="field__input"
            type="email"
            id="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.data.email}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="website">Website</label> - <em className="field__tip">Optional</em>
          <input
            className="field__input"
            type="text"
            id="website"
            name="website"
            placeholder="www.example.com"
            onChange={this.handleChange}
            value={this.state.data.website}
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            className="field__input field__input--textarea"
            id="message"
            name="message"
            placeholder="Tell us about your requirements"
            onChange={this.handleChange}
            value={this.state.data.message}
            required
          >
          </textarea>
        </div>
        <div className="field">
          <button onClick={this.handlePresubmit} className="button" type="submit">
            Send Message
          </button>
        </div>
        {this.state.status === "error" ? this.renderFormStatus() : ""}
      </form>
    )
  }

  render () {
    const {
      id,
      heading=null,
      byline=null,
      content=null,
      modifiers=[],
      flourishes=[],
      diagonal=false,
      image=null,
      mobileImage,
      style="default",
      children=null,
    } = this.props

    let styleModifiers = modifiers
    styleModifiers.push(style)
    let contactFormClassModifiers = styleModifiers.map(
      modifier => "contact-form--" + modifier
    ).join(" ")

    let bgImage = ""
    if (image) {
      if (diagonal) {
        bgImage = <Diagonal image={image} mobileImage={mobileImage}/>
      } else {
        bgImage = <ImageBackground image={image} mobileImage={mobileImage}/>
      }
    }

    return (
      <section id={id} className={`contact-form ${ contactFormClassModifiers }`}>
        {flourishes ? flourishes.map((flourish, i) => <Flourish key={i} category={flourish}/>) : ""}
        {bgImage}
        <div className="contact-form__content">
          <div className="contact-form__text">
            <div className="contact-form__text-inner">
              {heading ? <Heading level={1} modifiers={byline ? ["leader"] : ["major"]}>{heading}</Heading> : ""}
              {byline ? <Heading level={0} modifiers={["major"]}>{byline}</Heading> : ""}
              {content ? content.split("\n\n").map((para, i) => <p key={i}>{para}</p>) : ""}
              {children}
              <p>If you prefer, please contact us via email on <a className="link" href="mailto:contact@kingstonlabs.co.uk">contact@kingstonlabs.com</a></p>
            </div>
          </div>
          <div className="contact-form__form">
            <div className="contact-form__form-inner">
              {this.state.status === "success" ? this.renderSuccess() : this.renderForm()}
            </div>
          </div>
        </div>
      </section>
    )
  }

}


ContactForm.propTypes = {
  id: PropTypes.string,
  honeypotName: PropTypes.string,
  subject: PropTypes.string,
  heading: PropTypes.string,
  byline: PropTypes.string,
  content: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  flourishes: PropTypes.arrayOf(PropTypes.string),
  diagonal: PropTypes.bool,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mobileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  style: PropTypes.string,
  children: PropTypes.node,
}


export default ContactForm
