//UUID -> Universally Unique Identifier (Identificador único universal)

interface DadosDeEnvioEmail{
	para: string;
	id: string;
	assunto: string;
	texto: string;
}

function enviarEmail({para, id, assunto, texto}: DadosDeEnvioEmail) {
	//Biblioteca de envio de email

	console.log(para, id, assunto, texto)
}

class EnviarEmailParaUsuario {
	send() {
		// O enviarEmail espera apenas um parametro e por isso iremos transforma-lo em objeto
		enviarEmail(
			{para:"sarah.alves8@hotmail.com",
			id: "9899",
			assunto: "Olá!",
			texto: "Turo bom?"}
		);
	}
}