export const onDataFetched = (currentPage: number = 1) => (
    async (dispatch:any) => {
        let data: {} = await fetch(`http://swapi.dev/api/people/?page=${currentPage}`).then(response => response.json())
        const dataToReturn = {
            type: 'FETCH_DATA',
            payload: data
        }
        // console.log('fetched')
        dispatch(dataToReturn)
    }
)

export const onChangePage = (payload: [string, number]) => (
    (dispatch:any) => {
        dispatch({type: 'CHANGE_PAGE', payload})
    })