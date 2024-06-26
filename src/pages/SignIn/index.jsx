import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="text" Icon={FiMail} />
        <Input placeholder="Senha" type="password" Icon={FiLock} />
        <Button title="Entrar" />
        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
