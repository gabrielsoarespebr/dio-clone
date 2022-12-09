import './styles.css';

export function Home() {
  return (
    <div className='container'>
      <header>
        <a href='#'><img id='logo-dio' src='https://static.wixstatic.com/media/7a378f_5140deabd7d040378d740069cb692b87~mv2.png/v1/crop/x_0,y_10,w_1334,h_493/fill/w_568,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20DIO.png' alt='Logotipo da DIO' /></a>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>Entrar</a>
          <a href='#'>Cadastrar</a>
        </nav>
      </header>
      <main>

        <div className='home-text'>
          <h1 className='gradient-text'>Implemente</h1>
          <h1 className='white-text'>o seu futuro global agora!</h1>
          <p className='white-text'>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</p>
        </div>
        <img className='home-image' src='https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Programador' />

      </main>

    </div>
  );
}