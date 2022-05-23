import { useContext } from 'react';

import illustrationImg from '../images/illustration.svg';
import logoImg from '../images/logo.svg';
import googleIconImg from '../images/google-icon.svg';
import '../styles/auth.scss';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { AuthContext } from '../App';

export function Home() {
    const navigate = useNavigate();
    const { signInWithGoogle, user } = useContext(AuthContext)

    function handleCreateRoom () {
        if (!user) {
            signInWithGoogle();
        }
        navigate('/rooms/new');      
    }

  return (  
    <div id='page-auth'>
        <aside>
            <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
            <strong>Crie salas de Q&amp;A ao-vivo</strong>
            <p>Tire as dúvidas da sua audiência em tempo-real</p>
        </aside>
        <main>
            <div className='main-content'>
                <img src={logoImg} alt="letmeask" />
                <button 
                    className='create-room'
                    onClick={handleCreateRoom}
                    >
                    <img src={googleIconImg} alt="logo do google" />
                    Crie sua sala com o Google
                </button>
                <div className='separator'>
                    ou entre em uma sala
                </div>

                <form>
                    <input 
                        type="text" 
                        placeholder='Digite o código da sala'                            
                    />
                   <Button>
                       Entrar na sala
                   </Button>
                </form>
            </div>
        </main>
    </div>
  )
}
