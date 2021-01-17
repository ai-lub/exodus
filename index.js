(()=>{
    $('#js-btn').click(function(){
        const $inp=$('#js-input').val();
        if ($inp==='born'){
            $('#js-tru').show();
            $('.fal').hide();
        }else{
            $('.fal').show();
            $('#js-tru').hide();
        };
    });


        //ヒントのアコーディオン
    const $elm=document.querySelector('#js-accordion');
    const $trigger=$elm.getElementsByTagName('button');
    const tLength=$trigger.length;
    let index=0;
    while (index<tLength){
        $trigger[index].addEventListener('click',(e)=>clickHandler(e));
        index++;
    }
    const clickHandler=(e)=>{
        const $target=e.currentTarget;
        const $content=$target.nextElementSibling;
        if ($content.style.display==='block'){
            $content.style.display='none';
        }else{
            $content.style.display='block';
        }
    }

})();
