## __Vladimir Dymshakov__

### About me:
I am self-employed. My goal is to advance in web development in order to maintain websites on my own and maybe get a new job.

### Contacts:
__Location:__ Moscow, Russia

__E-mail:__ dymsh@mail.ru

__Discord:__ vdymsh

### Skills:
* C, C++, Python
* SQL
* PLC Programming (LAD, SCL)
* HTML, CSS, JavaScript

### Code Example: 
(String Reordering from Codewars):
```
function sentence(List) {
    let my_arr = [];
    for (let value of List) {
        let arr_item = [];
        for (let key in value) {
            arr_item.push(key);
            arr_item.push(value[key]);
            my_arr.push(arr_item);
        }
    }
    my_arr.sort((a, b) => a[0] - b[0]);
    let res = my_arr[0][1];
    for (let i = 1; i < my_arr.length; i++) {
        res = res + ' ' + my_arr[i][1];
    }

    return res;
}
```

### Projects:
[MyAnki](https://github.com/vdymsh/MyAnki) - Pet project for customized spaced repetition (Python). 

### Education:
Moscow State University (Physics department).

### Trainings:
* MIPT certificate on algorithmic programming. 
* CSC certificate in algorithms and data structures.
* RSSchool course JS / FRONT-END STAGE 0.

### English language proficiency:
B2 - [EF Set](https://www.efset.org/cert/hh9EzM).
