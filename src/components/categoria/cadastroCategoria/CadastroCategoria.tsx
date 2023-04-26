import React, { ChangeEvent, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getById } from '../../../services/Service';



function CadastroCategoria() {
    const history = useNavigate();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )
    const {id} = useParams<{id: string}>();
    const [categoria, setCategoria] = useState<Categoria>({
        id : 0,
        tipo: '',
        cor: '',
        fluxo:'',
    })

    function updateCategoria(event: ChangeEvent<HTMLInputElement>){
        setCategoria({
            ... categoria,
            [event.target.name] : event.target.value,
        })
    }

    async function getCategoriaById(id:string) {
        getById(`/categoria/${id}`, setCategoria, {
            headers: {
                'Authorization' : token
            }
        })
    }

    useEffect(() => {
        if(id !== undefined){
            getCategoriaById(id)
        }
    },[id])
    
    useEffect(() => {
        if(token === ''){
            alert('Efetue o login')
            history('/login')
        }
    },[token])

    async function onSubmit(id:string) {
        getById(`/categoria/${id}`, setCategoria, {
            headers: {
                'Authorization' : token
            }
        })
    }

  return (

  )
}

export default CadastroCategoria