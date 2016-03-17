var data = {
	'pageTitle' : 'Тест по программированию',
	'question' : [{
		'variantName' : '1. Вопрос №1',
		'variantList' : [{
			'title' : 'Вариант ответа №1' 
		},
		{	
			'title' : 'Вариант ответа №2'
		},
		{
			'title' : 'Вариант ответа №3'
		}]	
	},
	{ 
		'variantName' : '2. Вопрос №2',	
		'variantList' : [{
			'title' : 'Вариант ответа №1' 
		},
		{	
			'title' : 'Вариант ответа №2'
		},
		{
			'title' : 'Вариант ответа №3'
		}]	
	},
	{
		'variantName' : '3. Вопрос №3',	
		'variantList' : [{
			'title' : 'Вариант ответа №1' 
		},
		{	
			'title' : 'Вариант ответа №2'
		},
		{
			'title' : 'Вариант ответа №3'
		}]
	}]	
}

var page = {
	buildPage: function() {
		var wrapper = document.createElement('div');
		wrapper.className = 'wrapper';
		document.body.appendChild(wrapper);

		var titlePage = document.createElement('h2');
		titlePage.innerHTML = data.pageTitle;
		wrapper.appendChild(titlePage);
	},
	buildList: function() {
		for(var i=0; i<data.question.length; i++) {
			var variantBox = document.createElement('div');
			variantBox.className = 'variantBox';
			document.querySelector('.wrapper').appendChild(variantBox);

			var titleVariant = document.createElement('h3');
			titleVariant.innerHTML = data.question[i].variantName;
			variantBox.appendChild(titleVariant);

			var listWrap = document.createElement('input');
			variantBox.appendChild(listWrap);

			for(var j = 0; j < data.question[i].variantList.length; j++) {
				var listItem = document.createElement('li');
				listWrap.appendChild(listItem);

				/*var listItem_link = document.createElement('a');
				listItem_link.innerHTML = data.question[i].questionList[j].title;
				listItem_link.setAttribute('href', data.question[i].questionList[j].href);
				listItem.appendChild(listItem_link);*/
			}
		}
	},
	pageInit: function() {
		this.buildPage();
		this.buildList();
	}	
}
page.pageInit();

console.log(data);