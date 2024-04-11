import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { Background, Container, Form } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" Icon={FiUser} />
        <Input placeholder="E-mail" type="text" Icon={FiMail} />
        <Input placeholder="Senha" type="password" Icon={FiLock} />
        <Button title="Entrar" />
        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
