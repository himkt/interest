import React, { useEffect, useState } from 'react'
import Card from '../molecules/card'
import Form from '../molecules/form'
import LoadingContainer from '../atoms/loading'


const PaperList = () => {

  const [filt, setFilt] = useState([]);
  const [data, setData] = useState([]);


  const url: string = (
    'https://script.google.com/macros/s/'
    + 'AKfycbzh0Bz7rPAK9gcbjdJXpccEHTsfL5sQ4X9weX8CSVuwWS_TFF9i/exec'
  )


  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilt(data);
      })
  }, []);


  const filterContentsByQuery = (query: string) => {

    const filt = data.filter((paper: any) => {
      var item = ''
      for (var key in paper) item += paper[key] + ' '
      return item.toLowerCase().match(query.toLowerCase())
    });

    setFilt(filt);
  }


  if (data.length == 0) {
    return <LoadingContainer />
  }

  return (
    <div>
      <Form updateContents={filterContentsByQuery} />
      <section style={{ padding: '3rem' }}>
        <div className="container">
          <div className="columns is-multiline">
            {filt.map((paper: any, idx: number) => (
              <Card paper={paper} idx={idx} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


export default PaperList;
