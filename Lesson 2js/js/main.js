var data = {
	pageTitle : 'Тест по программированию',
	question : [{
			variantName : '1. Вопрос №1',
			variantList : [
				'Вариант ответа №1', 
				
				'Вариант ответа №2',
		
				'Вариант ответа №3'
			],
			inputName : ['1.1', '1.2', '1.3']	
		},
		{ 
			variantName : '2. Вопрос №2',
			variantList : [
				'Вариант ответа №1', 
				
				'Вариант ответа №2',
		
				'Вариант ответа №3'
			],
			inputName : ['2.1', '2.2', '2.3']		
		},
		{
			variantName : '3. Вопрос №3',
			variantList : [
				'Вариант ответа №1', 
				
				'Вариант ответа №2',
		
				'Вариант ответа №3'
			],
			inputName : ['3.1', '3.2', '3.3']	
	}],
	button : 'Проверить мои результаты'	
}

var page = {
	buildPage: function() {
		var wrap = document.createElement('div');
		wrap.classList.add ('wrapper');
		var body = document.querySelector('body');
		document.body.insertBefore(wrap, body.children[0]);

		var form = document.createElement('form');
		wrap.appendChild(form);

		var titlePage = document.createElement('h1');
		titlePage.innerHTML = data.pageTitle;
		wrap.appendChild(titlePage);
	},
	buildList: function() {
		for(var i=0; i<data.question.length; i++) {
			var wrapper = document.querySelector('.wrapper');
			
			var titleVariant = document.createElement('p');
			titleVariant.innerHTML = data.question[i].variantName;
			wrapper.appendChild(titleVariant);

			var listWrap = document.createElement('ul');
			wrapper.appendChild(listWrap);

			for(var j = 0; j < data.question[i].variantList.length; j++) {
				
				var listItem = document.createElement('li');
				listWrap.appendChild(listItem);

				var label = document.createElement('label');
				listItem.appendChild(label);

				var input = document.createElement('input');
				label.appendChild(input);
				input.setAttribute('type', 'checkbox');
				input.setAttribute('name', data.question[i].inputName[j]);

				var respond = document.createElement('span');
				respond.innerHTML = data.question[i].variantList[j];
				label.appendChild(respond);				
			}
		}
	},
	buildButton : function() {
		var wrapper = document.querySelector('.wrapper');
		var btn = document.createElement('input');
		wrapper.appendChild(btn);
		btn.setAttribute('type', 'submit');
		btn.classList.add('btn', 'btn-prime');
		btn.value = data.button;
},
	pageInit: function() {
		this.buildPage();
		this.buildList();
		this.buildButton();
}	
}

page.pageInit();

console.log(data);
