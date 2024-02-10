import React from "react";
import './SectionRegistro.css';
import iconApple from '../../assets/icons/iconApple.png';
import iconGoogle from '../../assets/icons/iconGoogle.png';
import iconFacebook from '../../assets/icons/iconFacebook.png';


const SectionRegistro = () => {
  

    return (
        <section className="section__Registro">
        <div className="registro__Formulario">
            <header className="titulo__Formulario">
                <h1>Registra-te para começares a ouvir</h1>
            </header>

            <form >
                <div>
                    <div className="registro-email__Titulo">
                        <label htmlFor="email">Endereço de e-mail:</label>
                    </div>
                </div>
                <div className="registro-email__Input">
                <input type="email" placeholder="nome@dominio.com"  />   
                </div>
                <div className="registro-email__Link">
                    <a href="https://accounts.spotify.com/pt-BR/login/phone?intent=signup&continue=https%3A%2F%2Fopen.spotify.com%2Fintl-pt%3Fflow_ctx%3Dab3a78ee-17be-463e-b727-34f9069ba38f%253A1707185166&flow_ctx=ab3a78ee-17be-463e-b727-34f9069ba38f:1707185166&creation_point=https://open.spotify.com/?sp_cid=656575c8a5716e1946bec33d4db6cb43&device=desktop">Utiliza antes o número de telefone.</a>
                </div>
                <button className="botao__seguinte" type="submit">
                    <span className="texto__botao">Seguinte</span>
                </button>
            </form>

            <div className="opcoes__registro">
                <div className="divisor">
                    <span className="text__divisor">ou</span>
                </div>
                <div className="buttons-opcoes__registro">
                    <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&access_type=offline&client_id=1046568431490-ij1gi5shcp2gtorls09frkc56d4mjbe2.apps.googleusercontent.com&state=AQBUsRIn2D2tG4MvsXT21UUy9OlKCFnEeb%2B0HW0TCNhIy6QbRKuoadV09BdfiS9grkvWiMOTAlWNuLJjJMqy9eXKSPe%2B%2BT66ZWYHy%2FihJo2javkNwJTAj6KfHYHfTHTy%2B7gaw%2F8G3FDWo9RQuMNRtgkZg68HTUW78x4Cdn02rrllEob1Uut4ZAfhQCGRXTVO4PjUeOwQXVp6%2FMcwkruWn3DuGQPabsA8DZcJHJcuQELPHnbqRlpsHjQUfB1%2BZmNvnQ3N08EXfe412Cgteh%2BShIlNkauh8LDtcrq6OIiKTN8fnfT5BWCCqf%2Fn056C5R4zBWe6RPjyb4f5mKLVozzfIb5fV%2FDoynC8IoGKB%2Bvb3X166h7BzpqS%2FmYm6XUMSAflfpchrh9kvIg%2FcVZ1%2B6%2Bpk4vLchNyX7y5%2BDy9UDVy51P%2BG1AIYplKyNKOoffci75epRmqRurMF1HYUZrqqX%2FA%2FJcqXlgHpkmHzIN5LtPP9uTIZGOLfBXweyCX06Is4yju4licXugghwxeJPfleHVUghGgnmd8vY6xQN8P%2FPoQq3i57V7lc1wXu5jEePQD08Yv68hmPMO%2Fd3GDxCx%2F1AmvC17HdjeRwA%3D%3D&scope=profile%20email%20openid&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fgoogle%2Fredirect%2Fsignup&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow" type="button" className="button__opcao"><img width="24px" height="25px" src={iconGoogle}alt="Logo Google"/><span className="text-button__opcao">Registra-te com o Google</span></a>
                    <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=174829003346&kid_directed_site=0&app_id=174829003346&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv17.0%2Fdialog%2Foauth%3Fclient_id%3D174829003346%26state%3DAQBreIrF9892OgteUbEHBMIbohuY1Lg3YWmf4e9u67oOUVhDwx3%252ByBR%252FF4oVQNruFF7p4OpmWIwt7a3nV4ttFz0HMHIF%252BrCXzqaZbqXLVBotd9OzahcV2q5qR7MgoWmodQZKUVdj2kZtRteMygX9Qqut4DKgynIHdvZKvr9KM7Hj08dC7Zr1CcHOtH19MVItqwYrskXfFNhSKCnILTp9nd7O%252BefrVoiLfs2ePNo%252B3o%252BxtfqsTZ%252F3VMzxnyH2Q1a%252FflhemA4nDhDm0KgMymNcp%252FOlZxkKs83XSzOoCtJ9CyRl1ltS%252BYRdd9nXaAhT5GxG0vt495EcbVYztUjrWoiPtk8L2O4DEsYda2ZUHH447NXZkfUWkLJAbd3xUn8plCAgGTOax1Hrc%252B0428lgHKJ8BY8GgaU4MUZONVxGp16KrN7cBX4lPuPrxXsqCyOH9lNIO9qah9ajjquWanxXGigLABk6uUc5VV78O0GPd39kctunNXSNxtBVHMavf3tQpzVHVCXeaGXWkzInXwypa3aw%252BsElLR8b%252FjmVY7lkblbyDv1%252BGdX8X9iW6fua6uty8IuncpnNaEowjpx14MWOq7vjHW61c9P3ug%253D%253D%26redirect_uri%3Dhttps%253A%252F%252Faccounts.spotify.com%252Flogin%252Ffacebook%252Fredirect%252Fsignup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D2044a8e3-200c-4493-8099-6f806ee51a7f%26tp%3Dunspecified&cancel_url=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Ffacebook%2Fredirect%2Fsignup%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DAQBreIrF9892OgteUbEHBMIbohuY1Lg3YWmf4e9u67oOUVhDwx3%252ByBR%252FF4oVQNruFF7p4OpmWIwt7a3nV4ttFz0HMHIF%252BrCXzqaZbqXLVBotd9OzahcV2q5qR7MgoWmodQZKUVdj2kZtRteMygX9Qqut4DKgynIHdvZKvr9KM7Hj08dC7Zr1CcHOtH19MVItqwYrskXfFNhSKCnILTp9nd7O%252BefrVoiLfs2ePNo%252B3o%252BxtfqsTZ%252F3VMzxnyH2Q1a%252FflhemA4nDhDm0KgMymNcp%252FOlZxkKs83XSzOoCtJ9CyRl1ltS%252BYRdd9nXaAhT5GxG0vt495EcbVYztUjrWoiPtk8L2O4DEsYda2ZUHH447NXZkfUWkLJAbd3xUn8plCAgGTOax1Hrc%252B0428lgHKJ8BY8GgaU4MUZONVxGp16KrN7cBX4lPuPrxXsqCyOH9lNIO9qah9ajjquWanxXGigLABk6uUc5VV78O0GPd39kctunNXSNxtBVHMavf3tQpzVHVCXeaGXWkzInXwypa3aw%252BsElLR8b%252FjmVY7lkblbyDv1%252BGdX8X9iW6fua6uty8IuncpnNaEowjpx14MWOq7vjHW61c9P3ug%253D%253D%23_%3D_&display=page&locale=pt_PT&pl_dbl=0" type="button" className="button__opcao"><img width="24px" height="25px" src={iconFacebook} alt="Logo Facebook"/><span className="text-button__opcao">Registra-te com o Facebook</span></a>
                    <a href="https://appleid.apple.com/auth/authorize?response_type=code&response_mode=form_post&client_id=com.spotify.accounts&state=AQAHif%2BqrEljY4HKLdKSiyp0oY0VblspOj0Fq5GC0KE3Gy4nQTd1nPjpH8Pla7W3R66KZi4bnSTtLBBC4S7KBYM5X78%2FqSZWfPJPqRofLZz0%2BYwvc%2BrbQ07Zu7Kf3dzIn8UEoC8d5W6hTxHgG%2Bbvo4hZnb2UHoHj%2FBr0i7bK8YOx%2Fr8vwSTjG%2Bm52E2XEon6Rr3uu99HEtDO1t%2FTbsLYbftr25KH0NugGyAeSAd0yEaWpstmS4hTZv5neYCoEOYJskM3PoHTrNKC%2FcvSK%2Fy1SdaUGpK%2FAbyUZcdsH2Ki6RHTWMPTiJrpUsyVnSqzELkswpPiP2zWd4m2PavWn5faUTGKG3AwWVS%2Fe%2BKdi8X7D0aj02uDKA%2BOehqFC0Diu%2FmQrP9kFVXDujxtzPmKudB1Ci8QKBfCEl8YfrBOw%2Bi%2BYqxPugaoNB4AYEIgme71ARa572Oa4W8NRVY2qM4G9fFWtBeabEWqlj5oDad4gxJ1%2F9D5wk1vwxACR68ptvluOwSBRMXSYEEU0vOjNu%2BHuCZKatFnyiBgv7iTDrfswf1jDZU1%2Fnf14sqXhDr2FJkPs%2BBqjVUlyByXmMQBLxVnnemq2UMgMtj0CA%3D%3D&scope=name+email&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fapple%2Fredirect%2Fsignup" type="button" className="button__opcao"><img width="24px" height="25px" src={iconApple} alt="Logo Apple"/><span className="text-button__opcao">Registra-te com a Apple</span></a>
                </div>

                <div className="divisor2"><span></span></div>

                <p className="aviso__conta"><span>Já tem uma conta?</span><a href="https://accounts.spotify.com/pt-PT/login?creation_point=https%3A%2F%2Fopen.spotify.com%2F%3Fsp_cid%3D656575c8a5716e1946bec33d4db6cb43%26device%3Ddesktop&continue=https%3A%2F%2Fopen.spotify.com%2Fintl-pt%3Fflow_ctx%3Def57297c-9491-4d58-ae96-28687d520dec%253A1707185182&flow_ctx=ef57297c-9491-4d58-ae96-28687d520dec%3A1707185182&_gl=1*20m9wv*_gcl_au*MTk0NTI1MjU3Ni4xNzA1MzI1ODM2">Inicie a sessão aqui</a></p>
            </div>

        </div>
    </section>

    )
};


export default SectionRegistro;