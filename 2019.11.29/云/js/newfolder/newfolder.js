function create(data){
    $('.folders').html('');
    $.each(data,(i,item)=>{
        let $folder=$(
            `<div class='file-item active'>
            <img src='img/folder-b.png' alt=''>
            <span class="folder-name"></span>  
            <input type='text'/>
            <p>${item.title}</p>
            <i class= checked"></i>
            </div>`
        );
        $folder.find('input').hide();
        $('.folders').append($folder);
    })
}
create(data);
$('#create').click(function(){
    let $folder=$(`
    <div class='file-item active'>
            <img src='img/folder-b.png' alt=''>
            <input type='text' value='新建文件夹'/ ><i class=""></i></div>`);
    $('.folders').append($folder);
    let $txt=$folder.find('input');
    $txt.select();
    $txt.blur(function(){
        let val=$txt.val();
        let bool=data.map(
            item=>item.title).includes(val);
            let newval='';
            let nu=1;
            newval=val;
            while(bool){
                let s=val.replace(/\(\d\)$/,'')+'('+nu++ +')';
                bool=data.map(item=>item.title).includes(s);
                newval=s;
            }
            data.push({
                id:+new Date,
                title:newval
            });
            create(data);
    })
})
