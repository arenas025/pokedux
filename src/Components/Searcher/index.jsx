import {Input} from 'antd'

const Searcher = ({setInputValue}) => {

    return(
        <Input.Search onChange={(e)=>setInputValue(e.currentTarget.value)} placeholder='Buscar' style={{marginBottom:20}}/>
    )
}

export default Searcher