import styled from 'styled-components'

export const Container=styled.div`
background:  linear-gradient(90deg, #383838 0% , #000000 81.25%);
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`

export const ToDoList=styled.div`
width: ;
height: 498px;
background: #FFFFFF;
border-radius: 5px;
padding:30px 20px;

ul{
    padding:0;
    margin-top:30px;
}
`
export const Button=styled.button`
width: 130px;
height: 40px;
margin:10px;
background: #8052EC;
color: #FFFFFF;
border-radius: 5px;
font-size:17px;
line-height:2px;
border:none;
cursor:pointer;
`

export const Input= styled.input`
height: 40px;
margin-right:10px;
width:340px;
top: 11px;
left:20px;
border-radius: 5px;
text-decoration:none;

`
export const ListItem=styled.div`
height: 60px;
width:500px;
margin-bottom: 30px;
background: ${props => props.isFinished ? '#E8FF8B':'#E4E4E4'};
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 5px;
list-style:none;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 10px;
cursor:pointer;
`
  




// é obrigatorio letra maiuscula no componente react colocamos a crase porque ultilizando  ela conseguimos misturar o javscript
//` isso aqui é uma string, isso aqui é um texto.mAS ${ aqui podemos colocar javscript}----EX´
// para importar precisa exporta