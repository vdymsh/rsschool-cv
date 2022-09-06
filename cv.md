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

### Code Example: 
(DigitalCypher from Codewars):
```
#include <iostream>
#include <string>
#include <vector>

class Kata
{
public:
    static std::vector<int> Encode(std::string str, int n);
};


std::vector<int> Kata::Encode(std::string str, int n) {
    std::vector<int> digits = {};
    while (n > 0) {
        digits.push_back(n % 10);
        n /= 10;
    }
    std::vector<int> res = {};
    int ndx = (int)digits.size() - 1;
    for (auto& ch : str) {
        res.push_back((int)ch - (int)'a' + 1 + digits[ndx]);
        ndx = (ndx + (int)digits.size() - 1) % (int)digits.size();
    }

    return res;
}
```

### Pet projects:
[MyAnki](https://github.com/vdymsh/MyAnki) - Pet project for customized spaced repetition (Python). 

### Education:
Moscow State University (Physics department).

### Trainings:
MIPT certificate on algorithmic programming. 

### English language proficiency:
A2: (Verdict of https://test.str.by is "According to the results of the lexical and grammatical test, you are recommended the level of study Intermediate (CEFR B1)."
