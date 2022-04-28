/**
 * Validacao de formulario
 * @author Leonardo Santos - Aluno StackX
 */

function validar(){
	let nome = frmContato.nome.value;
	let fone = frmContato.fone.value;
	
	if (nome === ""){
		alert('Campo "NOME" obrigatório, por favor preencha');
		frmContato.nome.focus;
		return false;
	 } else if (fone === ""){
		alert('Campo "FONE" obrigatório, por favor preencha');
		frmContato.nome.focus;
		return false;
	} else {
		document.forms["frmContato"].submit();
	}
}