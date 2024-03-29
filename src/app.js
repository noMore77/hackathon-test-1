import './styles.css'
import {ContextMenu} from './menu'
import {superFunc} from "@/modules/superFunction";
import {ClickAnalytic} from "@/modules/clickAnalytic";
import {WhereClicked} from "@/modules/where.clicked";
import {RandomMessage} from "@/modules/mod_message";
import {timerFunc} from "@/modules/mod_timer";


let menu = new ContextMenu('#menu')

// let func2 = new ClickAnalytic("type2", 'click analytic')
// menu.add(func2)

let func3 = new WhereClicked("type3", '🟢 click analytic')
menu.add(func3)

let func_message = new RandomMessage("typeMessage", '📨 message')
menu.add(func_message)

let func4 = new timerFunc("type3", '⏲ timer')
menu.add(func4)


document.body.addEventListener("contextmenu", event => {
    menu.open(event)
})

document.body.addEventListener("click", event => {
    menu.close(event)
    // menu.trigger(event)
})

