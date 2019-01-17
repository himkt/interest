const toJSON = records => {
    const fSplit = r => r.split('\t')
    const recordsArray = records.map(fSplit)
    const columns = recordsArray[0]
    const papers = recordsArray.slice(1)
    const papersJson = papers.map(paper => {
        const dict = {}
        for (let i = 0; i < columns.length; i++) {
            dict[columns[i].trim()] = paper[i] || ''
        }
        return dict
    })
    return papersJson
}

const parseTSV = response => {
    let records = response.split('\n')
    records = records.map(record => record.replace(/\n$/, ''))
    const papersJson = toJSON(records)
    return papersJson
}

export default parseTSV
