// $(document).ready(function(){

    function getColorName(id){
        let color,value
        switch(id){
            case 'R':
                color = 'Red'
                value = 'red'
                break;
            case 'G':
                color = 'Green'
                value = 'rgb(27, 202, 27)'
                break;
            case 'Y':
                color = 'Yellow' 
                value = 'rgb(255, 255, 0)'
                break;
            case 'A':
                color = 'Aqua'
                value = 'aqua'
                break;
            case 'P':
                color = 'Pink'
                value = 'rgb(241, 5, 143)'
                break;
            case 'B':
                color = 'Blue'
                value = 'blue'
                break;
            case 'V':
                color = 'Violet'
                value = 'violet'
                break;
            case 'O':
                color = 'Orange'
                value = 'rgb(255, 140, 0)'
                break;
            default:
                color = ''
                value = '#ffff'
                break;
        }
        return {color,value}

    }

    document.addEventListener('keypress',async (e)=>{
        const key = '#'+ e.key.toUpperCase();
        if(key == '#ENTER'){
            let colors = ['R','Y','O','P','A','B','V','G'];
            const n = colors.length
            for(i=0;i<3*n;i++){
                let {color,value} = getColorName(colors[i%n])
                const color_id = '#'+colors[i%n]
                setTimeout(()=>{
                    // $('.color_name').text(`Color: ${color}`)
                    // $('.color_name').css('color',value)
                    $('.heading').css('color',value)
                    // document.querySelector('.heading').style.color = value
                    $(color_id).prop('checked',true)
                    $('.letter').text(e.key)
                    console.log(color_id)
                },400*i)
            }
            return
        }
        let {color,value} = getColorName(key.slice(1))
        if(color==''){
            $('.heading').css('color','#ffff')  
            $('.letter').css('color','#ffff')
            $('.letter').text(e.key)
            $('input[type="radio"]').prop('checked',false)
            return
        }
        const check = $(key)[0].checked
        // console.log(check)
        if(!check){
            $('.heading').css('color',value)
            $('.letter').text(e.key)
            $('.letter').css('color',value)
        }else{
            $('.heading').css('color','#ffff')
            // $('.letter').text('')
            $('.letter').css('color','#ffff')
        }
        $(key).prop('checked',!check)
    });

    let flag=0
    document.getElementById('toggle_btn').addEventListener('click',()=>{
        console.log(flag)
        if(flag){
            document.querySelector('.instructions').style.animation = "closeInstruction 1s ease-in-out"
            document.querySelector('.instructions').classList.add('toggle')
            document.getElementById('toggle_btn').textContent = 'Instructions'
            flag=0
        }else{
            document.querySelector('.instructions').style.animation = "showInstruction 1s ease-in-out"
            document.querySelector('.instructions').classList.remove('toggle')
            document.getElementById('toggle_btn').textContent = 'Close'
            flag=1
        }
    })

    // if(document.getElementById('toggle_btn').checked){
    //     document.querySelector('.instructions').style.animation = "showInstruction 2s"
    // }
    // else{
    //     document.querySelector('.instructions').style.animation = "closeInstruction 2s"
    // }
// })   
