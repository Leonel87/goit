$(function(){
        
    var html = $('#test').html();
    var articles = [
    {
        title: 'Article 1',
        firstName: 'Aleksey',
        lastName: 'Uvarov',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae at, saepe, asperiores perferendis voluptate odit dolor, officiis deserunt ipsum, dicta voluptatum in totam animi quos ducimus. Voluptatum nostrum, dolores officia.'
    },
    {
        title: 'Article 2',
        firstName: 'Vasya',
        lastName: 'Pupkin',
        content:'Recusandae at, saepe, asperiores perferendis voluptate odit dolor, officiis deserunt ipsum, dicta voluptatum in totam animi quos ducimus.'
    },
    {
        title: 'Article 3',
        firstName: 'Gena',
        lastName: 'Bukin',
        content: 'Officia nemo porro ab aliquam nam ea dolorem modi voluptatem earum, et deserunt repudiandae ipsum facilis quod at doloribus tenetur ad aliquid.'
    }
    ];
    
    var content = tmpl(html, {
        data:articles
    });

    $('body').append(content);
});





