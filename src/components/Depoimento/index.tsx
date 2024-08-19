import styled from "styled-components";
import imagemExemplo from "../../imagens/fotoExemplo.jfif"


const Container = styled.div`
    width: 987px;
    padding: 5px 5px 5px 0;
    height: 331px;
    gap: 15px;
    display: flex;
    align-items: center;
   
`;

const ContainerDeDepoimento = styled.div`
    width: 426px;
    height: 311px;
    justify-content: center;
    flex-direction: column;
    display: flex;
    gap: 10px;
    padding: 0px 16px 0px 16px;
    background-color: #414ABA;
    border-radius: 8px;
    color: #fff;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: 400;
    text-align: left;
    
`;

const ContainerDeFoto = styled.div`
    width: 502px;
    height: 311px;
    border-radius: 8px;
    justify-content: center;
    flex-direction: column;
    border: solid 1px #000;
`;

const Titulo = styled.h1`
    padding: 0;
    margin: 0;
    width: 426px;
    height: 41px;
    line-height: 32.81px ;
    font-size: 28px;
    
`
const Texto = styled.p `
    width: 426px;
    height: 76px;  
    font-family: 'Roboto Flex', sans-serif;
    font-weight: 400;  
    font-size: 16px;
    line-height: 18.65px;
`;

const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;  
`


const Autor = styled.p `
    font-family: TTSupermolot-Bold, sans-serif;
    font-weight: bold;  
    font-size: 14px;
    margin-top: 36px;
`;


function Depoimento(){
    return(
        <Container>
            <ContainerDeDepoimento>
                <Titulo> Depoimento</Titulo>
                <Texto>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Nihil non similique expedita, placeat rem quis deserunt eos eaque aperiam a neque qui ipsum nisi rerum reiciendis veritatis, vel, ipsam ratione?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Nihil non similique expedita, placeat rem quis deserunt eos eaque aperiam a neque qui ipsum nisi rerum reiciendis veritatis, vel, ipsam ratione?
                   
                </Texto>
                <Autor>Maria Silva, PO da Tech Innovations</Autor>
              
            </ContainerDeDepoimento>

            <ContainerDeFoto>
                <Imagem src={imagemExemplo}/>
            </ContainerDeFoto>

        </Container>
    )
}
export default Depoimento