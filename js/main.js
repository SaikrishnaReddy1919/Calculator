function insert(num){
    $('.calc-display').val($('.calc-display').val() + num)
}
function equal(){
    $('.calc-display').val(eval($('.calc-display').val()))
}
function c(){
    $('.calc-display').val('');
}
function del(){
    let value = $('.calc-display').val();
    let val = value.length-1;
    value = value.substring(0, val)
    $('.calc-display').val(value);
    console.log(value)
}
