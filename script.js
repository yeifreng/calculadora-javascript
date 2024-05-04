const display = document.getElementById('display');
const button = document.querySelectorAll('button');


for(let btn of button){
    btn.addEventListener('click', buscar)

    function buscar(){

        if(display.value === ''){
            display.value = '0'
        }

        switch (btn.id) {
            case '=':
                display.value = eval(display.value)
                break;
            case 'ac':
                display.value = '';
                break;
            case 'de':
                    display.value = display.value.slice(0, -1)
                    break;
            default:
                    display.value += btn.id
                    break;
        }
    }
}



