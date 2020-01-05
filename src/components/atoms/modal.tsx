import React, { Component} from 'react'


interface Props {
  title: string
  authors: string
  firstAuthor: string
  year: string
  source: string
  paperType: string
}


interface State {
  isActive: string | null
}


class ModalButton extends Component<Props, State> {

  super() {
    this.state = { isActive: "" }
  }

  showModal = () => {
    console.log(this)
    this.setState({isActive: "is-active"})
  }

  closeModal = () => {
    this.setState({isActive: ""})
  }

  createBibTexEntry = () => {
    var entry = []

    const key = this.props.firstAuthor + this.props.year
    if (this.props.paperType == 'Conference paper') {
      entry.push(`@inproceedings{${key},`)
      entry.push(`  booktitle = {Proceedings of ${this.props.source}},`)
    }
    else {
      entry.push('@article')
      entry.push(`  journal = {${this.props.source}},`)
    }

    entry.push(`  title  = {${this.props.title}},`)
    entry.push(`  author = {${this.props.authors.trim().replace(/,/g, ' and ')}},`)
    entry.push(`  year   = {${this.props.year}},`)

    entry.push('}')
    return entry.join('\n') 
  }

  componentDidMount() {
    this.setState({isActive: ""});
  }

  render () {
    if(!this.state) return <span />

    return (
      <div>
        <div className={["modal", this.state.isActive].join(" ")}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">BibTex entry</p>
            </header>
            <section className="modal-card-body">
              <pre style={{whiteSpace: "pre"}}>{this.createBibTexEntry()}</pre>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-primary" onClick={this.closeModal}>Close</button>
            </footer>
          </div>
        </div>
        <button className="tag is-info" onClick={this.showModal}>BibTex</button>
      </div>
    )

  }
}


export default ModalButton
