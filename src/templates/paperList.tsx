import React, { useEffect, useState } from 'react'
import Card from '../molecules/card'
import Form from '../molecules/form'
import LoadingContainer from '../atoms/loading'


const PaperList = () => {

  const [filt, setFilt] = useState<Array<Object>>([]);
  const [data, setData] = useState<Array<Object>>([]);

  const appId: string = 'AKfycbwVUsinDsep3W50E9fhuSrvQIiXVqsb4DFp1nvBkRBhbmOEvpNT6x3yMem6O5Zh3q3odA';
  const url: string = `https://script.google.com/macros/s/${appId}/exec`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let paperItems: Array<Object> = data;
        paperItems.reverse();
        setFilt(paperItems);
        setData(paperItems);
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
      <section style={{ paddingRight: '1.5rem', paddingLeft: '1.5rem' }}>
        { filt.map((paper: any, idx: number) =>
          <Card
            paper={paper}
            idx={idx}
            key={idx}
          />
        )}
      </section>
    </div>
  )
}


export default PaperList;
