const inputTexto = document.querySelector('#inTexto');
const btn = document.querySelector('#btn');
const tarefas = document.querySelector('#tarefas');

function btnEnter(e){
    if (e.key === 'Enter' || e.type === 'click'){
        if (inputTexto.value === ''){
            alert('Você deve digitar algo para adicionar')
            return
        } else {
            criaTarefa(inputTexto.value)
        }
    }
};

btn.addEventListener('click', btnEnter);
inputTexto.addEventListener('keypress', btnEnter);

function criaTarefa(texto){
    const li = criaLi();
    li.innerText = texto;
    tarefas.appendChild(li);
    limpar();
    criaBtnApagar(li);
    salvarTarefas();
};

function criaLi(){
    const li = document.createElement('li');
    return li
};

function limpar(){
    inputTexto.value = '';
    inputTexto.focus();
};

function criaBtnApagar(li){
    li.innerText += ' ';
    const btn = document.createElement('button');
    btn.innerText = 'apagar';
    btn.classList.add('btn-apagar');
    li.appendChild(btn);
};

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('btn-apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const lista = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for (let item of lista){
        let tarefaText = item.innerText.replace('apagar', '').trim();
        listaDeTarefas.push(tarefaText);
    }
};




