import axios from 'axios';
const writeToTg = (arrayData) => {
    const TOKEN = "6424055806:AAF7Rsp8lgCe1_Dm8uDzaGQGeYv-gfMjl2M";
    const CHAT_ID = "-1002489868891";
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    let prList = arrayData.product

    let message = `<b>Заявка с сайта</b>\n`;
    let products = `<b> Товары: </b>\n`
    message += `<b>Email: </b> ${arrayData.email}\n`
    message += `<b>Улица и дом: </b> ${arrayData.street}\n`
    message += `<b>Номер квартиры: </b> ${arrayData.nApa}\n`
    message += `<b>Сумма покупки: </b> ${arrayData.summ}\n`
    prList.map((pr) => {
        products += `<b>Товар: </b>\n
                <b>Id: </b>${pr.id}
                <b>Нвазние: </b>${pr.name}
                <b>Цвет: </b>${pr.color}
                <b>Колличество: </b>${pr.quantity}
                <b>Цена: </b>${pr.price}
                <b>Размер: </b>${pr.size}\n`
            
    })
    message += products



    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
    }).then((res) => {
        console.log("Данные успешно отправлены, ok")
    }).catch(error => {
        console.log("Произошла ошибка: ", error)
    }).finally(() => {
        console.log("Сделана попытка отправки данных")
    })
}

export default writeToTg;