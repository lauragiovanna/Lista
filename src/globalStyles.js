import { createGlobalStyle } from 'styled-components'

 const GlobalStyles=createGlobalStyle` 
body{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:none;
}

*{
    font-family: 'Roboto', sans-serif;  
    
}
`
export default GlobalStyle

//a gente so importa pro app.jsx quando ultilizamos o export na variavel se a gente usa o export default em baixo n precisa importarno app jsx é so ir no main e importa e em baixo colocar oque vc importou (siga a documentação)
//aqui a gente coloca as configurações que seram destinadas a todos os elementos do site , tudo que a gente colocar aqui vai ser distribuido para todos o site , assim  ganha,mos tempo e nao precisamos ficar colocando em cada elemento um por um quando queremos que a mesma  cor ou tamanho seja iguais para todos.