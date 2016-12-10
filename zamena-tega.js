// скрипт замены тега
$(".tab-content td").has("strong").css("font-weight", "bold");
$('.tab-content td>strong').each(function(i,el){
    $(el).before($(el).text()).remove();
});