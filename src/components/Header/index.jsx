import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://avatars.githubusercontent.com/u/63386616?v=4"
          alt="Joabe Nascimento"
        />
        <div>
          <span>Bem-Vindo</span>
          <strong>Joabe Nascimento</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
  