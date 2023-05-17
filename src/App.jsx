import React, { useState } from 'react'; //importamos o estado toda vez que quremos que algo mude na tela ultilizamos
import { v4 as uuid } from 'uuid';
import { Container, ToDoList, Button, Input, ListItem } from './style.js'
import { FcEmptyTrash, FcApproval } from "react-icons/fc";

function App() {    //codigo javascript
  const [list, setList] = useState([{ id: uuid(), task: "Nada", finished: true }]);// o primeiro acessa o valor da variavel é a nossa variavel e o segundo altera o valor por padrao a gente escreve com set dentro fica  o valor inicial .Toda vez que eu quero alterar a variavel eu ultilizo o  set 
  const [inputTask, setInputTask] = useState(''); // aqui eu quero dizer que assim que recebermos uma tarefa sera adicionado na lista



  function inputMudou(event) { //quando o input mudar
    setInputTask(event.target.value) //a tarefa sera  guardada na lista dentrodo task , conforme eu for digitando vai ser guaradado tudo na task
  }

  function cliqueiNoBotao() { //quando o botao foi clicado
    setList([...list, { id: uuid(), task: inputTask, finished: false }]) //  so quando eu clicar no botao queele vai chamar a função,esses 3 pontinhos se refere ao que vamos estar adicionando na lista ele vai pegar os itensanteriores e vai adicionando um por um tudo que eu for adicionando  

  }
function finalizarTarefa(id){
const newList=list.map(item =>(
  item.id ===id ? {...item,finished:!item.finished} :item
))
setList(newList)
}
function deletarItem(id){
  const newList=list.filter(item =>item.id !=id )
setList(newList)
}

  return (  //retorna codigo html

    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="oque tenho que fazer"></Input>
        <Button className='Button' onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.map((item) => ( // aqui estamos se referindo a lista de uma forma mais semantica , dessa forma quando colocarmos info novas vai adicionar na lista  e sobre a key  é necessario que tenha umakey propria um indentificador
            <ListItem isFinished={  //AQUI ESTAMOS ULTILIZANDO O PROPS POIS QUEREMOS QUE A LISTA ASSIM QUE CLICARMOS NOS EMOJIS QUE ELA MUDE DE COR ENTÃO CRIAMOS UMA VARIAVEL E FALAMOS QUE O VALOR DELA SERA O ITEM . O FINISHED QUE É O CONCLUIDO      
              item.finished} key={item.id}>
              <FcApproval onClick={()=> finalizarTarefa(item.id)}/>
              <li>{item.task} </li>
              <FcEmptyTrash onClick={()=> deletarItem(item.id)}/>
            </ListItem>
          ))}
        </ul>
      </ToDoList>
    </Container>




  )
}



export default App
