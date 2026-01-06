const inputTexto = document.querySelector('#inTexto');
const btn = document.querySelector('#btn');
const tarefas = document.querySelector('#tarefas');
const results = document.querySelector('#results');

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
    const li = document.createElement('li')
    li.innerText = texto;
    tarefas.appendChild(li);
    limpar();
    criaBtnApagar(li);
    salvarTarefas();
    toggleResults();
};

function limpar(){
    inputTexto.value = '';
    inputTexto.focus();
};

function criaBtnApagar(li){
    li.innerText += ' ';
    const btn = document.createElement('button');
    const btnIcon = document.createElement('i')
    btnIcon.classList.add('fa-solid', 'fa-trash-can');
    btnIcon.classList.add('btn-apagar');
    li.appendChild(btnIcon);
};

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('btn-apagar')){
        el.parentElement.remove();
        salvarTarefas();
        toggleResults();
    }
});

function salvarTarefas(){
    const lista = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for (let item of lista){
        let tarefaText = item.innerText.replace('apagar', '').trim();
        listaDeTarefas.push(tarefaText);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
};

function adicionaTarefasSalvas(){
    const tarefaSalvas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefaSalvas);

    for(let tarefa of listaTarefas){
        criaTarefa(tarefa);
    }
};

adicionaTarefasSalvas();

function toggleResults(){
    if (tarefas.children.length === 0){
        results.classList.remove('mostrar');
    } else {
        results.classList.add('mostrar');
    }
};

function tarefaCompleta(){
    const tarefas = document.querySelectorAll('li');
    for (let tarefa of tarefas){
        tarefa.addEventListener('click', () => {
            tarefa.classList.toggle('completed')
        })
    }
};

tarefaCompleta();

