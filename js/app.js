let add = document.getElementById('add');
let output_list = document.getElementById('output_list');
let attribute_name = document.getElementById('attribute_name');


add.addEventListener('click',function(){
    var attribute_name_load = attribute_name.value;

    var out = attribute_name_load && attribute_name_load.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                .map(s => s.toLowerCase())
                .join('_');
    var attribute = document.createElement('span');
    attribute.classList.add('paragraph-styling');
    attribute.innerText =`'${out}' => 'xyz',`;

    var attribute2 = document.createElement('span');
    attribute2.classList.add('paragraph-styling');
    attribute2.innerText =`{{ @$topCourse['${out}'] }}`;

    var attribute3 = document.createElement('span');
    attribute3.classList.add('paragraph-styling');
    attribute3.innerText =`{{ $topCourse->${out} }}`;

    output_list.appendChild(attribute);
    output_list_2.appendChild(attribute2);
    output_list_3.appendChild(attribute3);
})
