export default function initFuncionamento(){

    /*
        new Date()

        O construtor Date é um objeto que permite manipular datas e horários
    
    */
    /*
    const agora = new Date()
    const promocao = new Date('December 24 2022 23:59')

    function converteEmDias(time){
        return time / (24 * 60 * 60 * 1000);
    }

    const diasAgora = converteEmDias(agora);
    const diasPromocao = converteEmDias(promocao);

    const faltam = diasPromocao - diasAgora;

    console.log(faltam);
    */
    //console.log(agora)
    //console.log(agora.getDate()/* somente o dia */)
    //console.log(agora.getDate()/* somente o dia */)
    //console.log(agora.getDay()/* dia da semana */)
    //console.log(agora.getMonth()/* mes */)
    //console.log(agora.getFullYear()/* ano */)
    //console.log(agora.getHours()/* horas */)
    //console.log(agora.getMinutes()/* minutos */)
    //console.log(agora.getTime()/* milisegundos desde 1970 */)
    //console.log(agora.getUTCHours() - 3 /* brasilia */)

    const funcionamento = document.querySelector('[data-semana]')
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
    const diaHorario = funcionamento.dataset.horario.split(',').map(Number)


    const dataAgora = new Date()
    const diaAgora = dataAgora.getDay()
    const horarioAgora = dataAgora.getHours()

    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
    const horarioAberto = (horarioAgora >= diaHorario[0] && horarioAgora < diaHorario[1])

    if(semanaAberto && horarioAberto){
        funcionamento.classList.add('aberto')
    }


}





