import React, { ChangeEvent } from 'react'


interface Props {
  updateContents: (query: string) => void
}


const Form = (props: Props, {}) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.updateContents(e.currentTarget.value)
  }

  return (
    <section style={{ padding: '1rem' }}>
      <div className="container">
        <div className="field">
          <label className="label">Query</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Named Entity Recognition"
              onChange={handleInputChange} />
          </div>
        </div>
      </div>
    </section>
  )
}


export default Form;
