import React, { useEffect, useState } from 'react'


interface Props {
  title: string
  authors: string
  firstAuthor: string
  year: string
  source: string
  paperType: string
}


const ModalButton = (props: Props) => {

  const [isActive, setIsActive] = useState("");


  const showModal = () => {
    setIsActive("is-active");
  }


  const closeModal = () => {
    setIsActive("");
  }


  const createBibTexEntry = () => {
    var entry = []

    const key = props.firstAuthor + props.year
    if (props.paperType == 'Conference paper') {
      entry.push(`@inproceedings{${key},`)
      entry.push(`  booktitle = {Proceedings of ${props.source}},`)
    }
    else {
      entry.push('@article')
      entry.push(`  journal = {${props.source}},`)
    }

    entry.push(`  title  = {${props.title}},`)
    entry.push(`  author = {${props.authors.trim().replace(/,/g, ' and ')}},`)
    entry.push(`  year   = {${props.year}},`)

    entry.push('}')
    return entry.join('\n')
  }


  useEffect(() => {
    setIsActive("");
  });


  return (
    <div>
      <div className={["modal", isActive].join(" ")}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">BibTex entry</p>
          </header>
          <section className="modal-card-body">
            <pre style={{ whiteSpace: "pre" }}>{createBibTexEntry()}</pre>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-info" onClick={closeModal}>Close</button>
          </footer>
        </div>
      </div>
      <a><span className="tag is-info" onClick={showModal}>BibTex</span></a>
    </div>
  )
}


export default ModalButton;
