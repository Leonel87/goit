$(function() {

var task = $('#task').html();
var page;
var taskData = [
{
    title: 'Пенькова Ольга Юрьевна',
    content: ['https://scontent-waw1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/168664_120009411402782_6391842_n.jpg?oh=748f3cc4d100f9f03dc7d691ad215840&oe=577083A2']
},
{
	title: 'Финансист, на данный момент не работаю',
	content: []
},
{
    title: 'Хочу учить фронт-енд, потому что: ',
    content: ['В сфере финансов не могу найти работу', 'Хочу работать в IT', 'Мне нравится фронт-енд']
},
{
	title: 'Мои контакты: ',
	content: ['тел.: +380997242342', 'skype: olya_kis1', '<a href="https://www.facebook.com/profile.php?id=100001811726892">facebook</a>']
},
{
	title: 'Хобби: ',
	content: ['Походы', 'Сплавы', 'Отдых с палаткой у костра']
}
];
var page = tmpl(task, {
	data: taskData
});

$('.second').click(function() {
	$('.carousel').css("display", "none");
	$('.second').css("display", "none");
	$('.first').css("display", "block");
	$('body').append(page)
});

$('.first').click(function() {
	$('.carousel').css("display", "block");
	$('.second').css("display", "block");
	$('.first').css("display", "none");
	$('.little').remove()
});

})