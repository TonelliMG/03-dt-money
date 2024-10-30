import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContainer } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionContainer>
                <table>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de Site</td>
                            <td>R$ 12.000,00</td>
                            <td>Venda</td>
                            <td>30/10/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>- R$ 12.000,00</td>
                            <td>Alimentação</td>
                            <td>30/10/2024</td>
                        </tr>
                    </tbody>
                </table>
            </TransactionContainer>
        </div>
    )
}