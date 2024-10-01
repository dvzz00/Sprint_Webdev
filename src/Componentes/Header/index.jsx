import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to='/'><h2><strong>Formula E</strong></h2></Link>
      <nav>
      <ul>
    <li>
			<Link to='/Problema'>Problema</Link>
		</li>
		<li>
			<Link to='/Solucao'>Solução</Link>
		</li>
    <li>
			<Link to='/Impacto'>Impactos</Link>
		</li>
	</ul>
        </nav>
    </header>
  );
}

export default Header;
